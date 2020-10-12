import dayjs from 'dayjs';
import {
  EspnLineupEntry,
  EspnMember,
  EspnResult,
  EspnStat,
  EspnStatSource,
  IEspnCompetitor,
  IEspnEvent,
  IEspnEventResult,
  Position,
  EspnTeam,
  EspnMatchup,
} from './espn-models';
import {
  IScheduleItem,
  ITotals,
  MinutesMap,
  PlayerResult,
  schedule,
  Team,
  teams,
  WeeklyResult,
} from './models';
import { cookie } from './espn-models';
import { truncateSync } from 'fs';

export const mapToPlayerResult = (
  entry: EspnLineupEntry,
  minutesMap?: MinutesMap
): PlayerResult => ({
  name: entry.playerPoolEntry.player.fullName,
  position: entry?.playerPoolEntry?.player?.defaultPositionId,
  minutes: !!minutesMap
    ? minutesMap[`${entry.playerPoolEntry.player.proTeamId}`]?.minutes || 0
    : 0,
  hasBall: !!minutesMap
    ? minutesMap[`${entry.playerPoolEntry.player.proTeamId}`]?.hasBall
    : false,
  yardToGo: !!minutesMap
    ? minutesMap[`${entry.playerPoolEntry.player.proTeamId}`]?.yardsToGo
    : 100,
  total: entry?.playerPoolEntry?.player.stats?.length
    ? entry?.playerPoolEntry?.player.stats.find(
        (w: EspnStat) => w.statSourceId === EspnStatSource.Actual
      )?.appliedTotal || 0
    : 0,
  projection: entry?.playerPoolEntry?.player.stats?.length
    ? entry?.playerPoolEntry?.player.stats.find(
        (w: EspnStat) => w.statSourceId === EspnStatSource.Prediction
      )?.appliedTotal || 0
    : 0,
  gameOver: !!minutesMap
    ? minutesMap[`${entry.playerPoolEntry.player.proTeamId}`]?.gameOver
    : true,
});

const mapToWeeklyResult = (
  weeklyResult: WeeklyResult,
  playerResult: PlayerResult
) => {
  if (playerResult.position == Position.QB) {
    if (!weeklyResult.qb) {
      return {
        ...weeklyResult,
        qb: playerResult,
      };
    }
    if (!weeklyResult.superFlex) {
      return {
        ...weeklyResult,
        superFlex: playerResult,
      };
    }
  } else if (playerResult.position == Position.RB) {
    if (!weeklyResult.rb1) {
      return {
        ...weeklyResult,
        rb1: playerResult,
      };
    }
    if (!weeklyResult.rb2) {
      return {
        ...weeklyResult,
        rb2: playerResult,
      };
    }
    if (!weeklyResult.flex) {
      return {
        ...weeklyResult,
        flex: playerResult,
      };
    }
    if (!weeklyResult.superFlex) {
      return {
        ...weeklyResult,
        superFlex: playerResult,
      };
    }
  } else if (playerResult.position == Position.WR) {
    if (!weeklyResult.wr1) {
      return {
        ...weeklyResult,
        wr1: playerResult,
      };
    }
    if (!weeklyResult.wr2) {
      return {
        ...weeklyResult,
        wr2: playerResult,
      };
    }
    if (!weeklyResult.wr3) {
      return {
        ...weeklyResult,
        wr3: playerResult,
      };
    }
    if (!weeklyResult.flex) {
      return {
        ...weeklyResult,
        flex: playerResult,
      };
    }
    if (!weeklyResult.superFlex) {
      return {
        ...weeklyResult,
        superFlex: playerResult,
      };
    }
  } else if (playerResult.position == Position.TE) {
    if (!weeklyResult.te) {
      return {
        ...weeklyResult,
        te: playerResult,
      };
    }
    if (!weeklyResult.flex) {
      return {
        ...weeklyResult,
        flex: playerResult,
      };
    }
    if (!weeklyResult.superFlex) {
      return {
        ...weeklyResult,
        superFlex: playerResult,
      };
    }
  }
  return {
    ...weeklyResult,
    bench: [...weeklyResult.bench, playerResult],
  };
};

const getStartingLineupTotal = (result?: WeeklyResult): ITotals => {
  if (result) {
    return {
      startingTotal:
        result.qb.total +
        result.rb1.total +
        result.rb2.total +
        result.wr1.total +
        result.wr2.total +
        result.wr3.total +
        result.te.total +
        result.flex.total +
        result.superFlex.total,
      benchTotal: result.bench.reduce(
        (total: number, benchPlayer: PlayerResult) => total + benchPlayer.total,
        0
      ),
      startingMinutes:
        result.qb.minutes +
        result.rb1.minutes +
        result.rb2.minutes +
        result.wr1.minutes +
        result.wr2.minutes +
        result.wr3.minutes +
        result.te.minutes +
        result.flex.minutes +
        result.superFlex.minutes,
      benchMinutes: result.bench.reduce(
        (minutes: number, benchPlayer: PlayerResult) =>
          minutes + benchPlayer.minutes,
        0
      ),
      projectedStartingTotal:
        result.qb.projection +
        result.rb1.projection +
        result.rb2.projection +
        result.wr1.projection +
        result.wr2.projection +
        result.wr3.projection +
        result.te.projection +
        result.flex.projection +
        result.superFlex.projection,
      projectedBenchTotal: result.bench.reduce(
        (total: number, benchPlayer: PlayerResult) =>
          total + benchPlayer.projection,
        0
      ),
    };
  }
};

const entriesToWeeklyResult = (
  entries: EspnLineupEntry[],
  weekId: number,
  minutesMap: MinutesMap
): WeeklyResult => {
  const result = entries
    .map((e) => mapToPlayerResult(e, minutesMap))
    .sort((a: PlayerResult, b: PlayerResult) => b.total - a.total)
    .reduce(mapToWeeklyResult, {
      weekId,
      bench: [],
      startingTotal: 0,
      benchTotal: 0,
      startingMinutes: 0,
      benchMinutes: 0,
    });

  const {
    startingTotal,
    benchTotal,
    startingMinutes,
    benchMinutes,
    projectedBenchTotal,
    projectedStartingTotal,
  } = getStartingLineupTotal(result);

  return {
    ...result,
    startingTotal,
    benchTotal,
    startingMinutes,
    benchMinutes,
    projectedBenchTotal,
    projectedStartingTotal,
  };
};

const convertEspnResult = (
  espnResult: EspnResult,
  espnEventResult?: IEspnEventResult
) => {
  const minRemainingMap: MinutesMap = espnEventResult?.events.reduce(
    (outerMap: MinutesMap, event: IEspnEvent) =>
      event.competitors.reduce(
        (innerMap: MinutesMap, comp: IEspnCompetitor) => {
          innerMap[comp.id] = {
            minutes: 60.0 * ((100.0 - (event?.percentComplete || 0)) / 100.0),
            hasBall: event.lastPlay.end?.team === comp.id,
            yardsToGo: event.lastPlay.end?.yardsToEndzone || 100,
            gameOver: event?.percentComplete === 100,
          };
          return innerMap;
        },
        outerMap
      ),
    {}
  );

  const result: Team[] = teams.map((t: Team) => {
    const { firstName, lastName } = espnResult.members.find(
      (m: EspnMember) => m.id === t.guid
    );
    const { location, nickname, logo } = espnResult.teams.find(
      (m: EspnTeam) => m.id === t.id
    );

    const weeklyResults = espnResult.schedule
      .filter(
        (s: EspnMatchup) =>
          (s.home.teamId === t.id && !!s.home.rosterForCurrentScoringPeriod) ||
          (s.away.teamId === t.id && !!s.away.rosterForCurrentScoringPeriod)
      )
      .map(
        (em: EspnMatchup): WeeklyResult => {
          if (em.away.teamId === t.id) {
            return entriesToWeeklyResult(
              em.away.rosterForCurrentScoringPeriod.entries,
              em.matchupPeriodId,
              minRemainingMap
            );
          }
          return entriesToWeeklyResult(
            em.home.rosterForCurrentScoringPeriod.entries,
            em.matchupPeriodId,
            minRemainingMap
          );
        }
      );

    return {
      ...t,
      firstName,
      lastName,
      weeklyResults,
      teamName: `${location} ${nickname}`,
      logo,
    };
  });
  return result;
};

export const getTeams = async (
  weekId: number,
  getMinutes: boolean
): Promise<Team[]> => {
  const { start, stop } = schedule.find((x) => x.weekId === weekId);

  const statsUrl = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2020/segments/0/leagues/1062294?scoringPeriodId=${weekId}&view=modular&view=mNav&view=mMatchupScore&view=mScoreboard&view=mTopPerformers&view=mTeam`;
  const eventsUrl = `https://site.api.espn.com/apis/fantasy/v2/games/ffl/games?useMap=true&dates=${start.format(
    'YYYYMMDD'
  )}-${stop.format('YYYYMMDD')}&pbpOnly=true`;

  if (getMinutes) {
    const responses = await Promise.all([
      fetch(statsUrl, { headers: { cookie } }),
      fetch(eventsUrl),
    ]);
    const [statsJson, eventsJson] = await Promise.all(
      responses.map((x) => x.json())
    );
    const teams = convertEspnResult(statsJson, eventsJson);
    return teams;
  } else {
    const response = await fetch(statsUrl, { headers: { cookie } });
    const json = await response.json();
    const teams = convertEspnResult(json);
    return teams;
  }
};

export const repopulateCache = async (): Promise<Team[]> => {
  const weekId = getCurrentWeek();
  const promise = new Promise<Team[]>((resolve, reject) => {
    Promise.all(
      schedule
        .filter((x: IScheduleItem) => x.weekId <= weekId)
        .map((item: IScheduleItem) =>
          getTeams(item.weekId, item.weekId === weekId)
        )
    )
      .then((result: Team[][]) => {
        const teams = result.reduce(
          (accumulator: Team[], currentValue: Team[], index: number) => {
            if (index === 0) {
              return currentValue;
            } else {
              return accumulator.map((team: Team) => ({
                ...team,
                weeklyResults: [
                  ...team.weeklyResults,
                  ...currentValue.find((ct: Team) => ct.id === team.id)
                    .weeklyResults,
                ],
              }));
            }
          },
          []
        );
        resolve(teams);
      })
      .catch((reason) => reject(reason));
  });
  return promise;
};

export const getCurrentWeek = (): number | undefined => {
  const now = dayjs();
  return schedule.find(
    (sch: IScheduleItem) => sch.start < now && sch.stop > now
  )?.weekId;
};
