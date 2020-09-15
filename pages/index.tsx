import React, { FC, useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Grommet,
  Select,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from 'grommet';
import AppBar from '../components/AppBar/AppBar';
import theme from '../theme';
import { Team, WeeklyResult, PlayerResult } from './api/stats';
import Standings from '../components/Standings/Standings';
import WeekStats from '../components/WeekStats/WeekStats';

const weekOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Home: FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [team, setTeam] = useState<Team>();
  const [selectedResult, setSelectedResult] = useState<WeeklyResult>();
  const [selectedWeek, setSelectedWeek] = useState<number>();

  useEffect(() => {
    fetch('/api/stats').then((response: Response) => {
      response.json().then((values: Team[]) => {
        setTeams(values);
        console.log('fetched');
      });
    });

    const timer = setTimeout(() => {
      fetch('/api/stats').then((response: Response) => {
        response.json().then((values: Team[]) => {
          setTeams(values);
          console.log('fetched on timer');
        });
      });
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  });

  const getFullName = (team: Team): string => {
    return `${team.firstName} ${team.lastName}`;
  };

  const onTeamSelect = (value: { option: Team }) => {
    setSelectedResult(
      value.option.weeklyResults[value.option.weeklyResults.length - 1]
    );
  };

  const onWeekOptionSelected = (value: { option: number }) => {
    setSelectedResult(
      team.weeklyResults.find((x) => x.WeekId === value.option)
    );
    setSelectedWeek(value.option);
  };

  return (
    <Grommet theme={theme}>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>
            Calpine IT Fantasy Football Best Ball Calculator
          </Heading>
        </AppBar>
        <Box direction='row' flex gap='large' margin='small'>
          <Standings teams={teams} />
          <Box direction='column' flex gap='small'>
            <Box direction='row' gap='small'>
              <Select
                options={teams}
                labelKey={getFullName}
                onChange={onTeamSelect}
                placeholder='Select User'
                value={team}
                valueKey='id'
              />
              <Select
                value={`${selectedWeek}`}
                options={weekOptions}
                onChange={onWeekOptionSelected}
                placeholder='Select Week'
              />
            </Box>
            <WeekStats result={selectedResult} />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default Home;
