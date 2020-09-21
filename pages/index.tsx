import React, { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Heading, Grommet, Select, Text, Image } from 'grommet';
import AppBar from '@components/AppBar/AppBar';
import theme from 'theme';
import { Team } from '@api/stats';
import useEspn from '@hooks/useEspn';
import BuyMeCoffee from '@components/BuyMeCoffee/BuyMeCoffee';
import LineChart from '@components/LineChart/LineChart';
import WeekStats from '@components/WeekStats/WeekStats';
import Standings from '@components/Standings/Standings';
import HighScores from '@components/HighScores/HighScores';

import styles from './index.module.scss';

const weekOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Home: FC = () => {
  const [teamGuid, setTeamGuid] = useState<string>();
  const [selectedWeek, setSelectedWeek] = useState<number>();
  const { result } = useEspn();

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
    <>
      <Head>
        <title>Calpine IT Fantasy Football Best Ball Calculator</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Grommet theme={theme}>
        <Box fill>
          <AppBar>
            <Box direction='row' justify='start' align='center' gap='xxsmall'>
              <Image src='calculator.svg' height={36} />

              <Heading level='3' margin='none'>
                Calpine IT Fantasy Football Best Ball Calculator
              </Heading>
            </Box>

            <Text size='xsmall'>
              Updated: {result?.updatedDate?.format('h:mm:ss A')}
            </Text>
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
                  labelKey={(x) => `Week ${x}`}
                />
              </Box>
              <WeekStats result={selectedResult} />
            </Box>
            <Standings teams={result.teams} />
          </Box>
          <Box
            direction='row-responsive'
            justify='center'
            flex
            margin='small'
            gap='large'
          >
            <div className={styles.lineChartContainer}>
              <LineChart teams={result.teams} />
            </div>
            <HighScores teams={result.teams} />
          </Box>
        </Box>
      </Grommet>
    </>
  );
};

export default Home;
