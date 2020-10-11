import dayjs, { Dayjs } from 'dayjs';
import { Position } from './espn-models';

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
  minutes: number;
  projection: number;
  hasBall: boolean;
  yardToGo: number;
}

export interface IScheduleItem {
  weekId: number;
  start: Dayjs;
  stop: Dayjs;
}

export interface IResult {
  teams: Team[];
  updatedDate?: Dayjs;
  fullRefresh?: Dayjs;
}

export const teams: Team[] = [
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

export interface ITotals {
  startingTotal: number;
  benchTotal: number;
  startingMinutes: number;
  benchMinutes: number;
  projectedStartingTotal?: number;
  projectedBenchTotal?: number;
}

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
  startingTotal: number;
  projectedStartingTotal?: number;
  startingMinutes: number;
  benchTotal: number;
  benchMinutes: number;
  projectedBenchTotal?: number;
}

export const schedule: IScheduleItem[] = [
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

export type MinutesMap = {
  [key: string]: { hasBall: boolean; yardsToGo: number; minutes: number };
};
