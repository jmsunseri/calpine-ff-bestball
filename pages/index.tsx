import React, { FC, useState, useEffect } from 'react';
import { Box, Heading, Grommet, Select } from 'grommet';
import AppBar from '../components/AppBar/AppBar';
import theme from '../theme';
import { Team } from './api/stats';
import Standings from '../components/Standings/Standings';
import WeekStats from '../components/WeekStats/WeekStats';
import useEspn from '../hooks/useEspn';

const weekOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Home: FC = () => {
  const [teamGuid, setTeamGuid] = useState<string>();
  const [selectedWeek, setSelectedWeek] = useState<number>();
  const { teams, refresh } = useEspn({ weekId: selectedWeek });

  const selectedResult = teams
    .find((x) => x.guid === teamGuid)
    ?.weeklyResults.find((x) => x.WeekId === selectedWeek);

  // initialization
  useEffect(() => {
    console.log('useEffect');
    const w = localStorage.getItem('week');
    const t = localStorage.getItem('team');
    if (w) {
      setSelectedWeek(+w);
    } else {
      setSelectedWeek(1);
    }
    if (t) {
      console.log('setting team id ' + t);
      setTeamGuid(t);
    }

    const timer = setTimeout(() => {
      refresh();
      console.log('refresh');
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onTeamSelect = (value: { option: Team }) => {
    console.log('team selected ', value.option);
    setTeamGuid(value.option.guid);
    localStorage.setItem('team', value.option.guid);
  };

  const onWeekOptionSelected = (value: { option: number }) => {
    setSelectedWeek(value.option);
    localStorage.setItem('week', `${value.option}`);
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
        <Box direction='row-responsive' flex margin='small' gap='large'>
          <Standings teams={teams} />
          <Box direction='column' flex width={{ min: '400px' }}>
            <Heading level={3}>Team Results</Heading>
            <Box direction='row' pad='xxsmall' gap='small'>
              <Select
                options={teams}
                labelKey='teamName'
                onChange={onTeamSelect}
                placeholder='Select User'
                value={teams.find((x) => x.guid === teamGuid)}
                valueKey='guid'
              />
              <Select
                value={selectedWeek}
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
