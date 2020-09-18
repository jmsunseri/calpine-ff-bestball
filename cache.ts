import { Team } from './pages/api/stats';

const teamsCache: Team[] = [
  {
    id: 1,
    guid: '{6DF02CC4-D54C-11D2-94E8-0060B067D8ED}',
    firstName: 'Derrick',
    lastName: 'Hinton',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Carson Wentz', position: 1, total: 0 },
          { name: 'DeSean Jackson', position: 3, total: 0 },
          { name: 'Chase Edmonds', position: 2, total: 0 },
          { name: 'Tyrod Taylor', position: 1, total: 0 },
          { name: 'Mike Gesicki', position: 4, total: 0 },
          { name: 'Latavius Murray', position: 2, total: 0 },
          { name: 'Laviska Shenault Jr.', position: 3, total: 0 },
        ],
        te: { name: 'T.J. Hockenson', position: 4, total: 0 },
        rb1: { name: 'Derrick Henry', position: 2, total: 0 },
        wr1: { name: 'Terry McLaurin', position: 3, total: 0 },
        qb: { name: 'Dak Prescott', position: 1, total: 0 },
        wr2: { name: 'Calvin Ridley', position: 3, total: 0 },
        superFlex: { name: 'Kyler Murray', position: 1, total: 0 },
        wr3: { name: 'DeVante Parker', position: 3, total: 0 },
        flex: { name: 'Davante Adams', position: 3, total: 0 },
        rb2: { name: 'J.K. Dobbins', position: 2, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Carson Wentz', position: 1, total: 12.040000000000001 },
          { name: 'Tyrod Taylor', position: 1, total: 9.16 },
          { name: 'DeVante Parker', position: 3, total: 8.7 },
          { name: 'Boston Scott', position: 2, total: 8.1 },
          { name: 'DeSean Jackson', position: 3, total: 6.6000000000000005 },
          { name: 'Mike Gesicki', position: 4, total: 6 },
          { name: 'Latavius Murray', position: 2, total: 5.76 },
        ],
        wr1: { name: 'Davante Adams', position: 3, total: 41.6 },
        wr2: { name: 'Calvin Ridley', position: 3, total: 33.88 },
        qb: { name: 'Kyler Murray', position: 1, total: 28.120000000000005 },
        rb1: { name: 'Derrick Henry', position: 2, total: 18.42 },
        superFlex: {
          name: 'Dak Prescott',
          position: 1,
          total: 18.240000000000002,
        },
        te: { name: 'T.J. Hockenson', position: 4, total: 16.6 },
        rb2: { name: 'J.K. Dobbins', position: 2, total: 14.64 },
        flex: { name: 'Chase Edmonds', position: 2, total: 13.02 },
        wr3: {
          name: 'Terry McLaurin',
          position: 3,
          total: 11.100000000000001,
        },
      },
    ],
    teamName: 'Kitten Mittons',
    logo:
      'https://thumbs.gfycat.com/ReflectingHarmfulCormorant-size_restricted.gif',
  },
  {
    id: 2,
    guid: '{D85E75B1-475E-4BF5-B5BD-2D7662277CA6}',
    firstName: 'Becky',
    lastName: 'Wong',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Ryan Tannehill', position: 1, total: 0 },
          { name: 'Hunter Henry', position: 4, total: 0 },
          { name: 'Daniel Jones', position: 1, total: 0 },
          { name: 'Tony Pollard', position: 2, total: 0 },
          { name: 'Henry Ruggs III', position: 3, total: 0 },
          { name: 'Darrel Williams', position: 2, total: 0 },
          { name: 'Allen Lazard', position: 3, total: 0 },
        ],
        te: { name: 'Tyler Higbee', position: 4, total: 0 },
        wr1: { name: 'Michael Thomas', position: 3, total: 0 },
        rb1: { name: 'Tarik Cohen', position: 2, total: 0 },
        rb2: { name: 'Todd Gurley II', position: 2, total: 0 },
        flex: { name: 'Melvin Gordon III', position: 2, total: 0 },
        wr2: { name: 'Stefon Diggs', position: 3, total: 0 },
        superFlex: { name: 'Cam Akers', position: 2, total: 0 },
        qb: { name: 'Jared Goff', position: 1, total: 0 },
        wr3: { name: 'Chris Godwin', position: 3, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Jared Goff', position: 1, total: 10.8 },
          { name: 'Tarik Cohen', position: 2, total: 7.52 },
          { name: 'Tyler Higbee', position: 4, total: 7 },
          { name: 'Cam Akers', position: 2, total: 6.08 },
          { name: 'Darrel Williams', position: 2, total: 5.46 },
          { name: 'Tony Pollard', position: 2, total: 5.4 },
          { name: 'Michael Thomas', position: 3, total: 4.7 },
        ],
        qb: { name: 'Ryan Tannehill', position: 1, total: 19.64 },
        wr1: { name: 'Allen Lazard', position: 3, total: 18.58 },
        superFlex: { name: 'Daniel Jones', position: 1, total: 17.8 },
        rb1: { name: 'Melvin Gordon III', position: 2, total: 17.16 },
        wr2: { name: 'Stefon Diggs', position: 3, total: 16.6 },
        rb2: {
          name: 'Todd Gurley II',
          position: 2,
          total: 14.819999999999999,
        },
        wr3: { name: 'Chris Godwin', position: 3, total: 13.9 },
        te: { name: 'Hunter Henry', position: 4, total: 12.3 },
        flex: { name: 'Henry Ruggs III', position: 3, total: 9.82 },
      },
    ],
    teamName: 'Team Wong',
    logo:
      'https://g.espncdn.com/lm-static/logo-packs/core/Incredibles/incredibles_12.svg',
  },
  {
    id: 3,
    guid: '{C98DFC59-FC78-4F78-A409-F4372A6FA243}',
    firstName: 'Ricky',
    lastName: 'Tran',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Ben Roethlisberger', position: 1, total: 0 },
          { name: 'James Robinson', position: 2, total: 0 },
          { name: 'Darius Slayton', position: 3, total: 0 },
          { name: 'Larry Fitzgerald', position: 3, total: 0 },
          { name: 'Anthony Miller', position: 3, total: 0 },
          { name: 'AJ Dillon', position: 2, total: 0 },
          { name: 'Justin Jackson', position: 2, total: 0 },
        ],
        rb1: { name: 'Kareem Hunt', position: 2, total: 25.82 },
        qb: { name: 'Baker Mayfield', position: 1, total: 15.36 },
        wr1: { name: 'A.J. Green', position: 3, total: 5.9 },
        superFlex: { name: 'Josh Allen', position: 1, total: 0 },
        wr2: { name: 'DJ Chark Jr.', position: 3, total: 0 },
        rb2: { name: 'Saquon Barkley', position: 2, total: 0 },
        wr3: { name: 'Will Fuller V', position: 3, total: 0 },
        flex: { name: 'Clyde Edwards-Helaire', position: 2, total: 0 },
        te: { name: 'Noah Fant', position: 4, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'DJ Chark Jr.', position: 3, total: 11.5 },
          { name: 'James Robinson', position: 2, total: 11.24 },
          { name: 'A.J. Green', position: 3, total: 10.100000000000001 },
          { name: 'Baker Mayfield', position: 1, total: 9.92 },
          { name: 'Larry Fitzgerald', position: 3, total: 7.4 },
          { name: 'AJ Dillon', position: 2, total: 1.68 },
          { name: 'Justin Jackson', position: 2, total: 0.48 },
        ],
        qb: { name: 'Josh Allen', position: 1, total: 29.32 },
        wr1: {
          name: 'Darius Slayton',
          position: 3,
          total: 28.200000000000003,
        },
        rb1: { name: 'Clyde Edwards-Helaire', position: 2, total: 22.56 },
        superFlex: {
          name: 'Ben Roethlisberger',
          position: 1,
          total: 21.240000000000002,
        },
        wr2: {
          name: 'Will Fuller V',
          position: 3,
          total: 19.200000000000003,
        },
        te: { name: 'Noah Fant', position: 4, total: 19.1 },
        wr3: { name: 'Anthony Miller', position: 3, total: 17.6 },
        rb2: {
          name: 'Saquon Barkley',
          position: 2,
          total: 12.719999999999999,
        },
        flex: { name: 'Kareem Hunt', position: 2, total: 12.540000000000001 },
      },
    ],
    teamName: 'Team Tran',
    logo: 'https://g.espncdn.com/lm-static/ffl/images/default_logos/20.svg',
  },
  {
    id: 4,
    guid: '{0B062C3B-50BC-4D85-B276-78985634EE62}',
    firstName: 'anthony',
    lastName: 'garcia',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Miles Sanders', position: 2, total: 0 },
          { name: 'Adrian Peterson', position: 2, total: 0 },
          { name: 'Tyler Eifert', position: 4, total: 0 },
          { name: 'Brandon Aiyuk', position: 3, total: 0 },
          { name: 'Nick Foles', position: 1, total: 0 },
          { name: 'P.J. Walker', position: 1, total: 0 },
          { name: 'Hunter Renfrow', position: 3, total: 0 },
        ],
        qb: { name: 'Joe Burrow', position: 1, total: 23.92 },
        superFlex: { name: 'Aaron Rodgers', position: 1, total: 0 },
        rb1: { name: 'David Johnson', position: 2, total: 0 },
        wr1: { name: 'T.Y. Hilton', position: 3, total: 0 },
        wr2: { name: 'Keenan Allen', position: 3, total: 0 },
        rb2: { name: 'Dalvin Cook', position: 2, total: 0 },
        wr3: { name: 'Julian Edelman', position: 3, total: 0 },
        flex: { name: 'Robert Woods', position: 3, total: 0 },
        te: { name: 'Jared Cook', position: 4, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Keenan Allen', position: 3, total: 7.7 },
          { name: 'Hunter Renfrow', position: 3, total: 4.1 },
          { name: 'Tyler Eifert', position: 4, total: 1.8 },
          { name: 'Miles Sanders', position: 2, total: 0 },
          { name: 'Brandon Aiyuk', position: 3, total: 0 },
          { name: 'Nick Foles', position: 1, total: 0 },
          { name: 'P.J. Walker', position: 1, total: 0 },
        ],
        qb: { name: 'Aaron Rodgers', position: 1, total: 30.799999999999997 },
        rb1: { name: 'Dalvin Cook', position: 2, total: 22.8 },
        rb2: { name: 'David Johnson', position: 2, total: 21.44 },
        wr1: { name: 'Robert Woods', position: 3, total: 18.18 },
        flex: { name: 'Adrian Peterson', position: 2, total: 16.26 },
        superFlex: { name: 'Joe Burrow', position: 1, total: 16.24 },
        wr2: { name: 'Julian Edelman', position: 3, total: 13.46 },
        te: { name: 'Jared Cook', position: 4, total: 13 },
        wr3: { name: 'T.Y. Hilton', position: 3, total: 9.3 },
      },
    ],
    teamName: 'Your Huckleberry',
    logo:
      'https://d1u5p3l4wpay3k.cloudfront.net/futuramaworldsoftomorrow_gamepedia_en/6/6b/Character_Destructor.png',
  },
  {
    id: 5,
    guid: '{825170B6-8367-4D0F-9233-3A822B344F74}',
    firstName: 'Jonathan ',
    lastName: 'Hui',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Gardner Minshew II', position: 1, total: 0 },
          { name: 'Darrell Henderson Jr.', position: 2, total: 0 },
          { name: 'Diontae Johnson', position: 3, total: 0 },
          { name: 'Marlon Mack', position: 2, total: 0 },
          { name: 'Jacoby Brissett', position: 1, total: 0 },
          { name: 'Cooper Kupp', position: 3, total: 0 },
          { name: 'Rob Gronkowski', position: 4, total: 0 },
        ],
        rb1: { name: 'Nick Chubb', position: 2, total: 28.779999999999998 },
        wr1: {
          name: 'Jarvis Landry',
          position: 3,
          total: 7.6000000000000005,
        },
        te: { name: 'Austin Hooper', position: 4, total: 4.2 },
        qb: { name: 'Tom Brady', position: 1, total: 0 },
        flex: { name: 'Zach Ertz', position: 4, total: 0 },
        superFlex: { name: 'Sam Darnold', position: 1, total: 0 },
        wr2: { name: 'Michael Gallup', position: 3, total: 0 },
        rb2: { name: 'Josh Jacobs', position: 2, total: 0 },
        wr3: { name: 'Mike Williams', position: 3, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Sam Darnold', position: 1, total: 11.32 },
          { name: 'Michael Gallup', position: 3, total: 8 },
          { name: 'Nick Chubb', position: 2, total: 6.799999999999999 },
          { name: 'Austin Hooper', position: 4, total: 3.5 },
          { name: 'Rob Gronkowski', position: 4, total: 3.1 },
          { name: 'Darrell Henderson Jr.', position: 2, total: 0.72 },
          { name: 'Jacoby Brissett', position: 1, total: 0 },
        ],
        rb1: { name: 'Josh Jacobs', position: 2, total: 37.76 },
        qb: { name: 'Gardner Minshew II', position: 1, total: 21.2 },
        superFlex: { name: 'Tom Brady', position: 1, total: 19.64 },
        wr1: {
          name: 'Jarvis Landry',
          position: 3,
          total: 11.100000000000001,
        },
        wr2: { name: 'Mike Williams', position: 3, total: 10.9 },
        te: { name: 'Zach Ertz', position: 4, total: 10.8 },
        wr3: { name: 'Diontae Johnson', position: 3, total: 9.7 },
        rb2: { name: 'Marlon Mack', position: 2, total: 9.120000000000001 },
        flex: { name: 'Cooper Kupp', position: 3, total: 8 },
      },
    ],
    teamName: 'I Wuv You',
    logo:
      'https://g.espncdn.com/lm-static/logo-packs/ffl/MatthewBerry-ChipWass/MatthewBerry-8.svg',
  },
  {
    id: 6,
    guid: '{34A079A3-835D-4B67-AFE1-FAD1360944B1}',
    firstName: 'Justin',
    lastName: 'Sunseri',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Matthew Stafford', position: 1, total: 0 },
          { name: 'Emmanuel Sanders', position: 3, total: 0 },
          { name: 'Sammy Watkins', position: 3, total: 0 },
          { name: 'Chris Herndon', position: 4, total: 0 },
          { name: 'Dwayne Haskins Jr.', position: 1, total: 0 },
          { name: 'Nyheim Hines', position: 2, total: 0 },
          { name: 'Joshua Kelley', position: 2, total: 0 },
        ],
        qb: { name: 'Jimmy Garoppolo', position: 1, total: 0 },
        wr1: { name: 'Kenny Golladay', position: 3, total: 0 },
        te: { name: 'Travis Kelce', position: 4, total: 0 },
        wr2: { name: 'Adam Thielen', position: 3, total: 0 },
        superFlex: { name: 'Drew Brees', position: 1, total: 0 },
        rb1: { name: 'Zack Moss', position: 2, total: 0 },
        rb2: { name: 'Antonio Gibson', position: 2, total: 0 },
        wr3: { name: 'Amari Cooper', position: 3, total: 0 },
        flex: { name: 'Phillip Lindsay', position: 2, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Drew Brees', position: 1, total: 14.4 },
          { name: 'Dwayne Haskins Jr.', position: 1, total: 12.16 },
          { name: 'Emmanuel Sanders', position: 3, total: 10.5 },
          { name: 'Chris Herndon', position: 4, total: 7.7 },
          { name: 'Antonio Gibson', position: 2, total: 7.12 },
          { name: 'Phillip Lindsay', position: 2, total: 4.98 },
          { name: 'Kenny Golladay', position: 3, total: 0 },
        ],
        wr1: { name: 'Adam Thielen', position: 3, total: 31 },
        rb1: { name: 'Nyheim Hines', position: 2, total: 27.86 },
        wr2: {
          name: 'Sammy Watkins',
          position: 3,
          total: 21.560000000000002,
        },
        qb: {
          name: 'Jimmy Garoppolo',
          position: 1,
          total: 19.439999999999998,
        },
        wr3: { name: 'Amari Cooper', position: 3, total: 18.1 },
        te: { name: 'Travis Kelce', position: 4, total: 17 },
        superFlex: { name: 'Matthew Stafford', position: 1, total: 16.64 },
        rb2: { name: 'Joshua Kelley', position: 2, total: 13.2 },
        flex: { name: 'Zack Moss', position: 2, total: 11.92 },
      },
    ],
    teamName: 'More Than A Thielin',
    logo:
      'https://pbs.twimg.com/profile_images/978927633051168769/d6wO-qNg_400x400.jpg',
  },
  {
    id: 9,
    guid: '{A74661CC-6CFC-45C1-8661-CC6CFC15C132}',
    firstName: 'Lou-Trice',
    lastName: 'Gamble',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Austin Ekeler', position: 2, total: 0 },
          { name: 'Deebo Samuel', position: 3, total: 0 },
          { name: 'Parris Campbell', position: 3, total: 0 },
          { name: 'Peyton Barber', position: 2, total: 0 },
          { name: 'Jonnu Smith', position: 4, total: 0 },
          { name: 'Corey Davis', position: 3, total: 0 },
          { name: 'Kirk Cousins', position: 1, total: 0 },
        ],
        wr1: { name: 'Tyler Boyd', position: 3, total: 20.2 },
        rb1: { name: 'Joe Mixon', position: 2, total: 13.52 },
        wr2: { name: 'Courtland Sutton', position: 3, total: 0 },
        wr3: { name: 'A.J. Brown', position: 3, total: 0 },
        rb2: { name: 'James Conner', position: 2, total: 0 },
        flex: { name: 'Raheem Mostert', position: 2, total: 0 },
        superFlex: { name: 'Keelan Cole Sr.', position: 3, total: 0 },
        qb: { name: 'Teddy Bridgewater', position: 1, total: 0 },
        te: { name: 'Eric Ebron', position: 4, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: "N'Keal Harry", position: 3, total: 6.9 },
          { name: 'James Conner', position: 2, total: 3.88 },
          { name: 'Eric Ebron', position: 4, total: 2.8 },
          { name: 'Chris Thompson', position: 2, total: 2.6 },
          { name: 'Bryan Edwards', position: 3, total: 1.9 },
          { name: 'Deebo Samuel', position: 3, total: 0 },
          { name: 'Courtland Sutton', position: 3, total: 0 },
        ],
        rb1: { name: 'Raheem Mostert', position: 2, total: 26.22 },
        qb: { name: 'Kirk Cousins', position: 1, total: 21.439999999999998 },
        superFlex: {
          name: 'Teddy Bridgewater',
          position: 1,
          total: 18.880000000000003,
        },
        wr1: { name: 'Parris Campbell', position: 3, total: 14.18 },
        rb2: { name: 'Austin Ekeler', position: 2, total: 11.38 },
        wr2: { name: 'A.J. Brown', position: 3, total: 8.9 },
        flex: { name: 'Joe Mixon', position: 2, total: 7.4799999999999995 },
        wr3: { name: 'Tyler Boyd', position: 3, total: 7.300000000000001 },
        te: { name: 'Dan Arnold', position: 4, total: 3.1 },
      },
    ],
    teamName: 'Team Who Dun It',
    logo:
      'https://g.espncdn.com/lm-static/logo-packs/ffl/HelmetAlphabet-ESPN/Helmet-L.svg',
  },
  {
    id: 10,
    guid: '{CAFA1E29-F589-430D-B483-9852C1BEBA9D}',
    firstName: 'Chris',
    lastName: 'Tran',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Alexander Mattison', position: 2, total: 0 },
          { name: 'Mecole Hardman', position: 3, total: 0 },
          { name: 'Preston Williams', position: 3, total: 0 },
          { name: 'Duke Johnson', position: 2, total: 0 },
          { name: 'Alshon Jeffery', position: 3, total: 0 },
          { name: 'Taysom Hill', position: 4, total: 0 },
          { name: "Tre'Quan Smith", position: 3, total: 0 },
        ],
        qb: { name: 'Drew Lock', position: 1, total: 0 },
        rb1: { name: 'Christian McCaffrey', position: 2, total: 0 },
        wr1: { name: 'John Brown', position: 3, total: 0 },
        rb2: { name: 'Kerryon Johnson', position: 2, total: 0 },
        te: { name: 'Mark Andrews', position: 4, total: 0 },
        wr2: { name: 'Christian Kirk', position: 3, total: 0 },
        wr3: { name: 'Robby Anderson', position: 3, total: 0 },
        superFlex: { name: 'Matt Ryan', position: 1, total: 0 },
        flex: { name: 'Alvin Kamara', position: 2, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Taysom Hill', position: 4, total: 5.48 },
          { name: 'Kerryon Johnson', position: 2, total: 1.68 },
          { name: 'Duke Johnson', position: 2, total: 1.68 },
          { name: 'Mecole Hardman', position: 3, total: 1.6 },
          { name: 'Christian Kirk', position: 3, total: 1 },
          { name: 'Alshon Jeffery', position: 3, total: 0 },
          { name: 'Justin Herbert', position: 1, total: 0 },
        ],
        rb1: { name: 'Christian McCaffrey', position: 2, total: 30.44 },
        wr1: { name: 'Robby Anderson', position: 3, total: 25.4 },
        rb2: { name: 'Alvin Kamara', position: 2, total: 24.02 },
        qb: { name: 'Matt Ryan', position: 1, total: 23.88 },
        te: { name: 'Mark Andrews', position: 4, total: 22.8 },
        wr2: { name: 'John Brown', position: 3, total: 19 },
        flex: { name: 'Alexander Mattison', position: 2, total: 13 },
        superFlex: { name: 'Drew Lock', position: 1, total: 11.24 },
        wr3: {
          name: 'Preston Williams',
          position: 3,
          total: 6.1000000000000005,
        },
      },
    ],
    teamName: '2020 Is Not Canon',
    logo:
      'http://www.naturalawakeningsmag.com/images/cache/cache_4/cache_9/cache_3/Healthy-Friendship-Group-ac4ed394.jpeg?ver=1534814268&aspectratio=2.0425531914894',
  },
  {
    id: 11,
    guid: '{21BDE872-1C35-4A02-BDE8-721C35AA0259}',
    firstName: 'Henry',
    lastName: 'Hernandez',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Breshad Perriman', position: 3, total: 0 },
          { name: 'Jack Doyle', position: 4, total: 0 },
          { name: 'Steven Sims Jr.', position: 3, total: 0 },
          { name: 'Danny Amendola', position: 3, total: 0 },
          { name: 'Cole Beasley', position: 3, total: 0 },
          { name: 'Jimmy Graham', position: 4, total: 0 },
          { name: 'Jamaal Williams', position: 2, total: 0 },
        ],
        wr1: { name: 'Odell Beckham Jr.', position: 3, total: 17.4 },
        wr2: { name: 'Golden Tate', position: 3, total: 0 },
        te: { name: 'George Kittle', position: 4, total: 0 },
        rb1: { name: 'Ezekiel Elliott', position: 2, total: 0 },
        wr3: { name: 'Tyler Lockett', position: 3, total: 0 },
        qb: { name: 'Cam Newton', position: 1, total: 0 },
        superFlex: { name: 'Ryan Fitzpatrick', position: 1, total: 0 },
        rb2: { name: 'Matt Breida', position: 2, total: 0 },
        flex: { name: 'Kenyan Drake', position: 2, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Jack Doyle', position: 4, total: 7.9 },
          { name: 'Steven Sims Jr.', position: 3, total: 7 },
          { name: 'Odell Beckham Jr.', position: 3, total: 5.2 },
          { name: 'Ryan Fitzpatrick', position: 1, total: 4.800000000000001 },
          { name: 'Breshad Perriman', position: 3, total: 4.7 },
          { name: 'Matt Breida', position: 2, total: 2.6399999999999997 },
          { name: 'Golden Tate', position: 3, total: 0 },
        ],
        rb1: { name: 'Ezekiel Elliott', position: 2, total: 29.62 },
        qb: { name: 'Cam Newton', position: 1, total: 27.2 },
        wr1: {
          name: 'Tyler Lockett',
          position: 3,
          total: 17.200000000000003,
        },
        rb2: { name: 'Kenyan Drake', position: 2, total: 15.7 },
        wr2: { name: 'Danny Amendola', position: 3, total: 13.1 },
        te: { name: 'Jimmy Graham', position: 4, total: 11.5 },
        wr3: { name: 'Cole Beasley', position: 3, total: 9.8 },
        flex: { name: 'George Kittle', position: 4, total: 9.48 },
        superFlex: { name: 'Jamaal Williams', position: 2, total: 8.62 },
      },
    ],
    teamName: 'Partial Chubb',
    logo: 'https://g.espncdn.com/lm-static/ffl/images/default_logos/19.svg',
  },
  {
    id: 12,
    guid: '{27B9A71F-25F7-4892-B9A7-1F25F77892C8}',
    firstName: 'Rick',
    lastName: 'Krostag',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Patrick Mahomes', position: 1, total: 0 },
          { name: 'Philip Rivers', position: 1, total: 0 },
          { name: 'James White', position: 2, total: 0 },
          { name: 'Curtis Samuel', position: 3, total: 0 },
          { name: 'Jalen Reagor', position: 3, total: 0 },
          { name: 'Benny Snell Jr.', position: 2, total: 0 },
          { name: 'Logan Thomas', position: 4, total: 0 },
        ],
        wr1: { name: 'CeeDee Lamb', position: 3, total: 0 },
        wr2: { name: 'Mike Evans', position: 3, total: 0 },
        wr3: { name: 'DJ Moore', position: 3, total: 0 },
        flex: { name: 'Allen Robinson II', position: 3, total: 0 },
        superFlex: { name: 'JuJu Smith-Schuster', position: 3, total: 0 },
        qb: { name: 'Deshaun Watson', position: 1, total: 0 },
        rb1: { name: "D'Andre Swift", position: 2, total: 0 },
        rb2: { name: 'Devin Singletary', position: 2, total: 0 },
        te: { name: 'Dallas Goedert', position: 4, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Philip Rivers', position: 1, total: 14.879999999999999 },
          { name: 'Curtis Samuel', position: 3, total: 9.4 },
          { name: 'James White', position: 2, total: 8.64 },
          { name: 'Mike Evans', position: 3, total: 7.2 },
          { name: 'Jordan Howard', position: 2, total: 6.84 },
          { name: 'Jalen Reagor', position: 3, total: 5.5 },
          { name: 'Kyle Rudolph', position: 4, total: 4.800000000000001 },
        ],
        wr1: { name: 'JuJu Smith-Schuster', position: 3, total: 24.9 },
        qb: { name: 'Deshaun Watson', position: 1, total: 21.36 },
        superFlex: {
          name: 'Patrick Mahomes',
          position: 1,
          total: 20.439999999999998,
        },
        te: { name: 'Greg Olsen', position: 4, total: 12.4 },
        wr2: {
          name: 'Allen Robinson II',
          position: 3,
          total: 12.280000000000001,
        },
        rb1: { name: "D'Andre Swift", position: 2, total: 11.46 },
        rb2: { name: 'Devin Singletary', position: 2, total: 10.9 },
        wr3: { name: 'CeeDee Lamb', position: 3, total: 10.9 },
        flex: { name: 'DJ Moore', position: 3, total: 9.4 },
      },
    ],
    teamName: 'Houston T-Sippers',
    logo:
      'https://g.espncdn.com/lm-static/logo-packs/core/Mascots/mascots-2.svg',
  },
  {
    id: 13,
    guid: '{A0B1F482-8B44-4BC9-8F43-19FD9838BF04}',
    firstName: 'Dexter',
    lastName: 'Stembridge',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Sterling Shepard', position: 3, total: 0 },
          { name: 'Tua Tagovailoa', position: 1, total: 0 },
          { name: 'Hayden Hurst', position: 4, total: 0 },
          { name: 'Jerry Jeudy', position: 3, total: 0 },
          { name: 'Sony Michel', position: 2, total: 0 },
          { name: 'Malcolm Brown', position: 2, total: 0 },
          { name: 'Russell Gage', position: 3, total: 0 },
        ],
        te: { name: 'Darren Waller', position: 4, total: 0 },
        wr1: { name: 'Tyreek Hill', position: 3, total: 0 },
        rb1: { name: 'Leonard Fournette', position: 2, total: 0 },
        rb2: { name: 'Chris Carson', position: 2, total: 0 },
        flex: { name: 'Jonathan Taylor', position: 2, total: 0 },
        wr2: { name: 'Marquise Brown', position: 3, total: 0 },
        wr3: { name: 'Marvin Jones Jr.', position: 3, total: 0 },
        qb: { name: 'Derek Carr', position: 1, total: 0 },
        superFlex: { name: 'Lamar Jackson', position: 1, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'Marvin Jones Jr.', position: 3, total: 9.5 },
          { name: 'Jerry Jeudy', position: 3, total: 8.600000000000001 },
          { name: "Le'Veon Bell", position: 2, total: 6.88 },
          { name: 'Hayden Hurst', position: 4, total: 6.800000000000001 },
          { name: 'Randall Cobb', position: 3, total: 4.300000000000001 },
          { name: 'Leonard Fournette', position: 2, total: 3 },
          { name: 'Tua Tagovailoa', position: 1, total: 0 },
        ],
        qb: { name: 'Lamar Jackson', position: 1, total: 27.4 },
        rb1: { name: 'Chris Carson', position: 2, total: 25.02 },
        wr1: { name: 'Tyreek Hill', position: 3, total: 15.600000000000001 },
        rb2: { name: 'Jonathan Taylor', position: 2, total: 15.34 },
        wr2: {
          name: 'Marquise Brown',
          position: 3,
          total: 15.100000000000001,
        },
        superFlex: { name: 'Derek Carr', position: 1, total: 13.56 },
        wr3: { name: 'Sterling Shepard', position: 3, total: 10.7 },
        te: { name: 'Darren Waller', position: 4, total: 10.5 },
        flex: { name: 'Sony Michel', position: 2, total: 10.44 },
      },
    ],
    teamName: 'Team Who?',
    logo: 'https://g.espncdn.com/s/ffllm/logos/Mascots/mascots-5.svg',
  },
  {
    id: 14,
    guid: '{D4681DCE-D095-4E20-A793-C9994179B1ED}',
    firstName: 'Nathan',
    lastName: 'Graves',
    weeklyResults: [
      {
        weekId: 2,
        bench: [
          { name: 'Julio Jones', position: 3, total: 0 },
          { name: 'Mitchell Trubisky', position: 1, total: 0 },
          { name: 'Tevin Coleman', position: 2, total: 0 },
          { name: 'O.J. Howard', position: 4, total: 0 },
          { name: 'Jamison Crowder', position: 3, total: 0 },
          { name: 'Damien Harris', position: 2, total: 0 },
          { name: 'Devine Ozigbo', position: 2, total: 0 },
        ],
        rb1: { name: 'Mark Ingram II', position: 2, total: 0 },
        rb2: { name: 'Aaron Jones', position: 2, total: 0 },
        wr1: { name: 'DeAndre Hopkins', position: 3, total: 0 },
        qb: { name: 'Russell Wilson', position: 1, total: 0 },
        flex: { name: 'Ronald Jones II', position: 2, total: 0 },
        superFlex: { name: 'David Montgomery', position: 2, total: 0 },
        wr2: { name: 'Brandin Cooks', position: 3, total: 0 },
        wr3: { name: 'DK Metcalf', position: 3, total: 0 },
        te: { name: 'Evan Engram', position: 4, total: 0 },
      },
      {
        weekId: 1,
        bench: [
          { name: 'David Montgomery', position: 2, total: 9.68 },
          { name: 'Brandin Cooks', position: 3, total: 4 },
          { name: 'Tevin Coleman', position: 2, total: 3.7600000000000002 },
          { name: 'Mark Ingram II', position: 2, total: 3.48 },
          { name: 'Evan Engram', position: 4, total: 2.9 },
          { name: 'Damien Harris', position: 2, total: 0 },
          { name: 'Devine Ozigbo', position: 2, total: 0 },
        ],
        qb: { name: 'Russell Wilson', position: 1, total: 31.36 },
        wr1: { name: 'DeAndre Hopkins', position: 3, total: 29.1 },
        wr2: { name: 'Julio Jones', position: 3, total: 24.700000000000003 },
        wr3: { name: 'Jamison Crowder', position: 3, total: 24.5 },
        superFlex: { name: 'Mitchell Trubisky', position: 1, total: 23.8 },
        flex: { name: 'DK Metcalf', position: 3, total: 19.5 },
        rb1: { name: 'Aaron Jones', position: 2, total: 17.92 },
        te: { name: 'O.J. Howard', position: 4, total: 13.6 },
        rb2: { name: 'Ronald Jones II', position: 2, total: 11.52 },
      },
    ],
    teamName: 'Team NathanG',
    logo:
      'https://g.espncdn.com/lm-static/logo-packs/core/Incredibles/incredibles_8.svg',
  },
];

export default teamsCache;