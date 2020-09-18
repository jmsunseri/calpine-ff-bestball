import React, { FC, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Heading, Grommet, Select, Text } from 'grommet';
import AppBar from '../components/AppBar/AppBar';
import theme from '../theme';
import { Team } from './api/stats';
import useEspn from '../hooks/useEspn';
import BuyMeCoffee from '../components/BuyMeCoffee/BuyMeCoffee';

const WeekStats = dynamic(() => import('../components/WeekStats/WeekStats'), {
  ssr: false,
});

const Standings = dynamic(() => import('../components/Standings/Standings'), {
  ssr: false,
});

const weekOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const GlobalStyles: FC = () => (
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
);

const Home: FC = () => {
  const [teamGuid, setTeamGuid] = useState<string>();
  const [selectedWeek, setSelectedWeek] = useState<number>();
  const { result, refresh } = useEspn();

  const selectedResult = result.teams
    .find((x) => x.guid === teamGuid)
    ?.weeklyResults.find((x) => x.weekId === selectedWeek);

  // initialization
  useEffect(() => {
    const w = localStorage.getItem('week');
    const t = localStorage.getItem('team');
    if (w) {
      setSelectedWeek(+w);
    } else {
      setSelectedWeek(1);
    }
    if (t) {
      setTeamGuid(t);
    }

    setInterval(() => {
      refresh();
    }, 15000);
  }, []);

  const onTeamSelect = (value: { option: Team }) => {
    setTeamGuid(value.option.guid);
    localStorage.setItem('team', value.option.guid);
  };

  const onWeekOptionSelected = (value: { option: number }) => {
    setSelectedWeek(+value.option);
    localStorage.setItem('week', `${value.option}`);
  };

  return (
    <Grommet theme={theme}>
      <GlobalStyles />

      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>
            Calpine IT Fantasy Football Best Ball Calculator
          </Heading>

          <Text>Last Updated: {result?.updatedDate?.format('h:mm:ss A')}</Text>
        </AppBar>
        <Box
          direction='row-responsive'
          justify='center'
          flex
          margin='small'
          gap='large'
        >
          <Box direction='column' flex width={{ min: '400px', max: '600px' }}>
            <Box direction='row' justify='between' align='center'>
              <Heading level={3}>Team Results</Heading>
              <Box
                elevation='medium'
                height={{ min: '40px', max: '40px' }}
                align='end'
                round='medium'
              >
                <BuyMeCoffee />
              </Box>
            </Box>

            <Box direction='row' pad='xxsmall' gap='small'>
              <Select
                options={result.teams}
                labelKey='teamName'
                onChange={onTeamSelect}
                placeholder='Select User'
                value={result.teams.find((x) => x.guid === teamGuid)}
                valueKey='guid'
              />
              <Select
                value={`${selectedWeek}`}
                options={weekOptions.map((x) => `${x}`)}
                onChange={onWeekOptionSelected}
                placeholder='Select Week'
              />
            </Box>
            <WeekStats result={selectedResult} />
          </Box>
          <Standings teams={result.teams} />
        </Box>
      </Box>
    </Grommet>
  );
};

export default Home;
