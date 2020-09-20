import { ResponsiveLine } from '@nivo/line';
import { Team, WeeklyResult } from '../../pages/api/stats';
import { schedule } from '../../pages/api/stats';
import { FC } from 'react';
import { Heading, Box } from 'grommet';

const getStartingLineupTotal = (result?: WeeklyResult): number => {
  if (result) {
    return (
      result.qb.total +
      result.rb1.total +
      result.rb2.total +
      result.wr1.total +
      result.wr2.total +
      result.wr3.total +
      result.te.total +
      result.flex.total +
      result.superFlex.total
    );
  }
  return 0;
};

const teamsToLineChartData = (teams: Team[]) => {
  return teams.map((t) => ({
    id: t.firstName,
    data: [
      { x: '2020-09-05', y: 0 },
      ...schedule.reduce((dataPoints: any[], s) => {
        if (t.weeklyResults.find((x) => x.weekId === s.weekId)) {
          return [
            ...dataPoints,
            {
              x: s.start.format('YYYY-MM-DD'),
              y: t.weeklyResults.reduce(
                (total: number, wr: WeeklyResult) =>
                  wr.weekId <= s.weekId
                    ? total + getStartingLineupTotal(wr)
                    : total,
                0
              ),
            },
          ];
        }
        return dataPoints;
      }, []),
    ],
  }));
};

const LineChart: FC<{ teams: Team[] }> = ({ teams }) => (
  <>
    <Heading level={3}>Trends</Heading>
    <ResponsiveLine
      data={teamsToLineChartData(teams)}
      margin={{ top: 10, right: 110, bottom: 70, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'football season',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'points',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'paired' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel={(x) => x.yFormatted.toString()}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </>
);

export default LineChart;
