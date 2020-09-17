import { NextApiRequest, NextApiResponse } from 'next';
import Lru from 'lru-cache';
import dayjs, { Dayjs } from 'dayjs';

// const statsUrl =
//   'https://fantasy.espn.com/apis/v3/games/ffl/seasons/2020/segments/0/leagues/1062294?rosterForTeamId=6&view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mRoster&view=mSettings&view=mTeam&view=modular&view=mNav';
const cookie =
  'UNID=80da75bc-9a08-4b6e-b8c7-5c7e0dbf6493; region=unknown; _dcf=1; _fbp=fb.1.1599626656517.1100474203; kona_v3_environment_season_ffl={"leagueId":1062294,"seasonId":null}; IR_gbd=espn.com; ESPN-ONESITE.WEB-PROD-ac=XUS; SWID={34A079A3-835D-4B67-AFE1-FAD1360944B1}; SWID_NT=0; kona_v3_teamcontrol_ffl={"leagueId":1062294,"seasonId":2020,"teamId":6}; _cb_ls=1; _cb=BRbWCyCQh2ILnWAsy; AMCVS_EE0201AC512D2BE80A490D4C%40AdobeOrg=1; s_ecid=MCMID%7C89030394189798390032071266217898198412; s_cc=true; country=tw; country=tw; trc_cookie_storage=taboola%2520global%253Auser-id%3D47dcd955-f0ea-4636-ac37-4ffc7e2db8d5-tuct34fba78; ESPN-ONESITE.WEB-PROD.token=5=eyJhY2Nlc3NfdG9rZW4iOiJlYTQwZDA2MTA3NTg0NzBlYjYxZWE1MThkZTAzNTVkZiIsInJlZnJlc2hfdG9rZW4iOiI5NWI2MzgwYWFjYjM0MDcwYjE3MGUyODYxNTJjYmZiOCIsInN3aWQiOiJ7MzRBMDc5QTMtODM1RC00QjY3LUFGRTEtRkFEMTM2MDk0NEIxfSIsInR0bCI6ODY0MDAsInJlZnJlc2hfdHRsIjoxNTU1MjAwMCwiaGlnaF90cnVzdF9leHBpcmVzX2luIjpudWxsLCJpbml0aWFsX2dyYW50X2luX2NoYWluX3RpbWUiOjE1NzA4OTk2NDUwMjcsInNzbyI6bnVsbCwiYXV0aGVudGljYXRvciI6ImRpc25leWlkIiwibG9naW5WYWx1ZSI6bnVsbCwiY2xpY2tiYWNrVHlwZSI6bnVsbCwic2Vzc2lvblRyYW5zZmVyS2V5Ijoid2craHA1SDlWZ2UrV25SaWJPRk1IYnIxZFRwdVV3cXAxK3NpWUxBMmxEbWJBT1dPNFphWnRjanM4WVc1NTN0U2xOMzQ2N0Ivbnovc0VUVVMwYTZQaDE0NmpxSmpyQ2dFSGRaVWp4Y29tS2E4Z0xSWGNURT0iLCJjcmVhdGVkIjoiMjAyMC0wOS0xM1QyMDo0MzoxNy42ODBaIiwibGFzdENoZWNrZWQiOiIyMDIwLTA5LTEzVDIwOjQzOjE3LjY4MFoiLCJleHBpcmVzIjoiMjAyMC0wOS0xNFQyMDo0MzoxNy42ODBaIiwicmVmcmVzaF9leHBpcmVzIjoiMjAyMS0wMy0xMlQyMDo0MzoxNy42ODBaIiwiYmx1ZV9jb29raWUiOm51bGx9|eyJraWQiOiJ3UnlKZXlYTi9iODdwamFySDVOaldCcEpzV1dJZXREZlZMeVZyNDRJRXlrPSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJodHRwczovL2F1dGhvcml6YXRpb24uZ28uY29tIiwic3ViIjoiezM0QTA3OUEzLTgzNUQtNEI2Ny1BRkUxLUZBRDEzNjA5NDRCMX0iLCJhdWQiOlsidXJuOmJhbXRlY2g6c2VydmljZTphY2NvdW50IiwiRVNQTi1PTkVTSVRFLldFQi1QUk9EIl0sImV4cCI6MTYwMDExNjE5NywiaWF0IjoxNjAwMDI5Nzk3LCJqdGkiOiItZ2pUWGUwSXFVTDhjZEtEbFB5aEt3IiwibmJmIjoxNjAwMDI5NzM3LCJhX3R5cCI6IkRJU05FWUlEIiwiYV9jYXQiOiJHVUVTVCIsImF0ciI6ImRpc25leWlkIiwiY190aWQiOiIxMzI0IiwiaWdpYyI6MTU3MDg5OTY0NTAyNywiaHRhdiI6MiwiaHRkIjoxODAwLCJydHRsIjoxNTU1MjAwMH0.iXnm1BcYd7ElTPRZ3-VDDuf2z6-xhhmA_-7Q8p2rHbgyTYyqvER9sKixnPt53wzaGDWo6h-gdRlz2XYSSn4zm2QAUdn2nbacjeBRIevmBIrYCoIYnF-5DUrthtWPf5EokhDrCdWSg_8vClRSwXhRlZSQ4JAaDbexRxFl_8S_J4eZ-vDQrIDCThbn9YXKWCrBQ77bPI8mE_nmekxBMEPbsE_vPImz_-8bjaRVf9s1RTtuhSs5_QNQQraO-VYmoB_bTuYdjN7qi7odAQitFSfacOY1czvwYaBJ6mb70l_g0YqabkYyghOuc2-WRMTUXmYYXHUQ9TephbKlOKazG8igkA; s_c24_s=Less%20than%201%20day; espn_s2=AEAq%2BU%2FfUzCDaOw5mo6tC1muIvezhE9yGGqNOU1Dp9niCC%2BgsxqAO0ZU%2BnV%2FXXfi78hdmLt4nyHb4HrVuyrsjpjdqqXIIFTkH0ARV4GfFFnf1VIrqM4ucEludnaghXHWFgmaSQjvnqdIsQYK0ycxthtQVWcytVurWeURW813QLQB32fyvC7%2B124VwQFoB4jfz40ag9VzFJ0x2Evz8ZEjNUWhEpeA8RksoNtfRtpe6oGd5NGtVtgltADhsP8mNHFauY%2BMU4YtQt4SdHtDgfmKf410; ESPN-ONESITE.WEB-PROD.idn=00f31a5289; _uetsid=198b1a380beb170235b4c9b34a988e9a; _uetvid=75b749eda8e99092c7b84a972d44fd3c; IR_9070=1600061603112%7C0%7C1600061603112%7C%7C; _chartbeat2=.1568162654198.1600061603409.0000000000110011.CtmkNuChSUczBS863PBVt1Rhfx1D4.1; _cb_svref=https%3A%2F%2Ffantasy.espn.com%2Ffootball%2Fleague%2Fscoreboard%3FleagueId%3D1062294; AMCV_EE0201AC512D2BE80A490D4C%40AdobeOrg=-330454231%7CMCIDTS%7C18519%7CMCMID%7C89030394189798390032071266217898198412%7CMCAAMLH-1600666404%7C11%7CMCAAMB-1600666404%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1600068804s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C3.1.2; _chartbeat5=508,44,%2Ffootball%2Fleague%2Fscoreboard,https%3A%2F%2Ffantasy.espn.com%2Ffootball%2Fteam%3FleagueId%3D1062294%26teamId%3D6,DLmD2HBa8R-LDjMHRaCrR5cp1mgEx,,c,DD8Pr_uuZ5yB_SjG-LOrsxX_CrK,espn.com,; s_c24=1600061928685; s_gpv_pn=fantasy%3Afootball%3Aleague%3Ateam; s_c6=1600061928689-Repeat; s_sq=%5B%5BB%5D%5D; _chartbeat4=t=DNHDDYIpAW6Cl_wRXCctfVrShA10&E=39&x=0&c=5.96&y=1751&w=1148';

// const statsUrl =
//   'https://fantasy.espn.com/apis/v3/games/ffl/seasons/2020/segments/0/leagues/1062294?scoringPeriodId=1&view=modular&view=mNav&view=mMatchupScore&view=mScoreboard&view=mTopPerformers&view=mTeam';

export interface Team {
  id: number;
  guid: string;
  firstName?: string;
  lastName?: string;
  weeklyResults?: WeeklyResult[];
  teamName?: string;
  logo?: string;
}

export interface PlayerResult {
  name: string;
  total: number;
  position: Position;
}

interface IScheduleItem {
  weekId: number;
  start: Dayjs;
  stop: Dayjs;
}

const schedule: IScheduleItem[] = [
  { weekId: 1, start: dayjs('2020-09-10'), stop: dayjs('2020-09-17') },
  { weekId: 2, start: dayjs('2020-09-17'), stop: dayjs('2020-09-24') },
  { weekId: 3, start: dayjs('2020-09-24'), stop: dayjs('2020-10-01') },
  { weekId: 4, start: dayjs('2020-10-01'), stop: dayjs('2020-10-08') },
  { weekId: 5, start: dayjs('2020-10-08'), stop: dayjs('2020-10-15') },
  { weekId: 6, start: dayjs('2020-10-15'), stop: dayjs('2020-10-22') },
  { weekId: 7, start: dayjs('2020-10-22'), stop: dayjs('2020-10-29') },
  { weekId: 8, start: dayjs('2020-10-29'), stop: dayjs('2020-11-05') },
  { weekId: 9, start: dayjs('2020-11-05'), stop: dayjs('2020-11-12') },
  { weekId: 10, start: dayjs('2020-11-12'), stop: dayjs('2020-11-19') },
  { weekId: 11, start: dayjs('2020-11-19'), stop: dayjs('2020-11-26') },
  { weekId: 12, start: dayjs('2020-11-26'), stop: dayjs('2020-12-03') },
  { weekId: 13, start: dayjs('2020-12-03'), stop: dayjs('2020-12-10') },
  { weekId: 14, start: dayjs('2020-12-10'), stop: dayjs('2020-12-17') },
  { weekId: 15, start: dayjs('2020-12-17'), stop: dayjs('2020-12-24') },
  { weekId: 16, start: dayjs('2020-12-31'), stop: dayjs('2021-01-07') },
];

export interface WeeklyResult {
  weekId: number;
  qb?: PlayerResult;
  rb1?: PlayerResult;
  rb2?: PlayerResult;
  wr1?: PlayerResult;
  wr2?: PlayerResult;
  wr3?: PlayerResult;
  te?: PlayerResult;
  flex?: PlayerResult;
  superFlex?: PlayerResult;
  bench: PlayerResult[];
}

interface EspnMember {
  displayName: string;
  firstName: string;
  id: string;
  lastName: string;
}

export interface IResult {
  teams: Team[];
  updatedDate?: Dayjs;
}

interface EspnLineup {
  entries: EspnLineupEntry[];
}

interface EspnPlayer {
  fullName: string;
  defaultPositionId: number;
  stats: EspnStat[];
}

enum EspnStatSource {
  Actual = 0,
  Prediction = 1,
}

interface EspnStat {
  appliedTotal: number;
  scoringPeriodId: number;
  statSourceId: EspnStatSource;
}

interface EspnPlayerPoolEntry {
  player: EspnPlayer;
}

interface EspnLineupEntry {
  lineupSlotId: number;
  playerPoolEntry: EspnPlayerPoolEntry;
}

interface EspnOpponent {
  rosterForCurrentScoringPeriod: EspnLineup;
  teamId: number;
}

interface EspnMatchup {
  home: EspnOpponent;
  away: EspnOpponent;
  matchupPeriodId: number;
}

interface EspnTeam {
  id: number;
  location: string;
  nickname: string;
  logo: string;
}

interface EspnResult {
  members: EspnMember[];
  schedule: EspnMatchup[];
  teams: EspnTeam[];
}

export enum Position {
  QB = 1,
  RB = 2,
  WR = 3,
  TE = 4,
}

const teams: Team[] = [
  { id: 1, guid: '{6DF02CC4-D54C-11D2-94E8-0060B067D8ED}' },
  { id: 2, guid: '{D85E75B1-475E-4BF5-B5BD-2D7662277CA6}' },
  { id: 3, guid: '{C98DFC59-FC78-4F78-A409-F4372A6FA243}' },
  { id: 4, guid: '{0B062C3B-50BC-4D85-B276-78985634EE62}' },
  { id: 5, guid: '{825170B6-8367-4D0F-9233-3A822B344F74}' },
  { id: 6, guid: '{34A079A3-835D-4B67-AFE1-FAD1360944B1}' },
  { id: 9, guid: '{A74661CC-6CFC-45C1-8661-CC6CFC15C132}' },
  { id: 10, guid: '{CAFA1E29-F589-430D-B483-9852C1BEBA9D}' },
  { id: 11, guid: '{21BDE872-1C35-4A02-BDE8-721C35AA0259}' },
  { id: 12, guid: '{27B9A71F-25F7-4892-B9A7-1F25F77892C8}' },
  { id: 13, guid: '{A0B1F482-8B44-4BC9-8F43-19FD9838BF04}' },
  { id: 14, guid: '{D4681DCE-D095-4E20-A793-C9994179B1ED}' },
];

export interface Stats {
  teams: Team[];
}

const mapToPlayerResult = (entry: EspnLineupEntry): PlayerResult => ({
  name: entry.playerPoolEntry.player.fullName,
  position: entry?.playerPoolEntry?.player?.defaultPositionId,
  total: entry?.playerPoolEntry?.player.stats?.length
    ? entry?.playerPoolEntry?.player.stats.find(
        (w: EspnStat) => w.statSourceId === EspnStatSource.Actual
      )?.appliedTotal || 0
    : 0,
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

const convertEspnResult = (espnResult: EspnResult) => {
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
            return em.away.rosterForCurrentScoringPeriod.entries
              .map(mapToPlayerResult)
              .sort((a: PlayerResult, b: PlayerResult) => b.total - a.total)
              .reduce(mapToWeeklyResult, {
                weekId: em.matchupPeriodId,
                bench: [],
              });
          }
          return em.home.rosterForCurrentScoringPeriod.entries
            .map(mapToPlayerResult)
            .sort((a: PlayerResult, b: PlayerResult) => b.total - a.total)
            .reduce(mapToWeeklyResult, {
              weekId: em.matchupPeriodId,
              bench: [],
            });
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

const getTeams = async (weekId: number): Promise<Team[]> => {
  const statsUrl = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2020/segments/0/leagues/1062294?scoringPeriodId=${weekId}&view=modular&view=mNav&view=mMatchupScore&view=mScoreboard&view=mTopPerformers&view=mTeam`;
  const response = await fetch(statsUrl, {
    headers: {
      cookie,
    },
  });
  const json = await response.json();
  const teams = convertEspnResult(json);
  return teams;
};

const repopulateCache = async (): Promise<Team[]> => {
  console.log('repopulating', dayjs().format('hh:mm:ss'));
  var now = dayjs();
  const promise = new Promise<Team[]>((resolve, reject) => {
    Promise.all(
      schedule
        .filter((x: IScheduleItem) => x.start < now)
        .map((item: IScheduleItem) => getTeams(item.weekId))
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

const lruCache = new Lru({ maxAge: 86400000 });

const stats = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cache: IResult = lruCache.get('cache') as IResult;
    var now = dayjs();

    if (!cache) {
      const teams = await repopulateCache();
      const newCache: IResult = { teams, updatedDate: dayjs() };
      lruCache.set('cache', newCache);
      res.status(200).json(newCache);
    } else if (cache.updatedDate.add(15, 'second') < now) {
      const weekId = schedule.find(
        (sch: IScheduleItem) => sch.start < now && sch.stop > now
      )?.weekId;
      if (weekId) {
        const refreshed = await getTeams(weekId);
        const teams = refreshed.map(
          (team: Team): Team => ({
            ...team,
            weeklyResults: [
              ...team.weeklyResults,
              ...cache.teams
                .find((ct: Team) => ct.id === team.id)
                .weeklyResults.filter(
                  (wr: WeeklyResult) => wr.weekId !== weekId
                ),
            ],
          })
        );
        const newCache: IResult = { teams, updatedDate: dayjs() };
        lruCache.set('cache', newCache);
        res.status(200).json(newCache);
      } else {
        res.status(200).json(cache);
      }
    } else {
      res.status(200).json(cache);
    }
  } catch (error) {
    console.log('error: ', error);
    res.status(500);
  }
};

export default stats;
