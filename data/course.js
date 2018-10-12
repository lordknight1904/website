import fs from 'fs';

function base64_encode(file) {
  return fs.readFileSync(__dirname + `/material/${file}`, {encoding: 'base64'});
}
const fileArr = [
  'hw1_randomprocess_2018.pdf',
  'hw1_sigsys2018spring.pdf',
  'hw2_randomprocess_2018.pdf',
  'hw2_sigsys2018spring.pdf',
  'hw3_randomprocess_2018.pdf',
  'hw3_sigsys2018spring.pdf',
  'hw4_randomprocess_2018.pdf',
  'hw4_sigsys2018spring.pdf',
  'hw5_sigsys2018spring.pdf',
  'hw6_sigsys2018spring.pdf',
  'midterm1_randomprocess_2018.pdf',
  'midterm2_randomprocess_2018.pdf',
  'quiz1_randomprocess_2018.pdf',
  'quiz1_sigsys2018spring.pdf',
  'sol1_sigsys2018spring.pdf',
  'sol2_sigsys2018spring.pdf',
  'solhw1_randomprocess_2018.pdf',
  'solhw2_randomprocess_2018.pdf',
  'solhw3_randomprocess_2018.pdf',
  'solmid1_randomprocess_2018.pdf',
  'solmid2_randomprocess_2018.pdf',
  'solquiz1_randomprocess_2018.pdf',
  'solquiz1_sigsys2018spring.pdf',
  'syllabus_random_process18.pdf',
  'syllabus_signal_systems2018.pdf',
];
let file = {};
fileArr.map((a) => {
  file[`${a}`] = base64_encode(`${a}`);
});

const course = [
  {
    active: false,
    code: '430.523',
    name: 'Random Signal Theory',
    alias: 'RS430523_2018',
    time: 'Spring 2018',
    teachingTime: 'Tuesday and Thursday, 14:00 ~ 15:15, #302 College of Engineering Bldg. 301',
    preference: [
      'Stark and Woods, Probability, Random Processes, and Estimation Theory, 2nd ed., Prentice Hall.',
      'S. M. Ross, Probability Models, 7th ed., Harcourt Academic Press.'
    ],
    teachingAssistants: [
      '5b6bfd2f8a281c44ee0541f0',
      '5b6bfd2f8a281c44ee0541f1'
    ],
    materials: [
      {
        name: 'Syllabus',
        file: file['syllabus_random_process18.pdf'],
        fileName: 'syllabus_random_process18.pdf',
      },
      {
        name: 'Homework 1',
        file: file['hw1_randomprocess_2018.pdf'],
        fileName: 'hw1_randomprocess_2018.pdf',
        solution: file['solhw1_randomprocess_2018.pdf'],
        solutionName: 'solhw1_randomprocess_2018.pdf',
      },
      {
        name: 'Homework 2',
        file: file['hw2_randomprocess_2018.pdf'],
        fileName: 'hw2_randomprocess_2018.pdf',
        solution: file['solhw2_randomprocess_2018.pdf'],
        solutionName: 'solhw2_randomprocess_2018.pdf',
      },
      {
        name: 'Homework 3',
        file: file['hw3_randomprocess_2018.pdf'],
        fileName: 'hw3_randomprocess_2018.pdf',
        solution: file['solhw3_randomprocess_2018.pdf'],
        solutionName: 'solhw3_randomprocess_2018.pdf',
      },
      {
        name: 'Homework 4',
        file: file['hw4_randomprocess_2018.pdf'],
        fileName: 'hw4_randomprocess_2018.pdf',
      },
      {
        name: 'Quiz 1',
        file: file['quiz1_randomprocess_2018.pdf'],
        fileName: 'quiz1_randomprocess_2018.pdf',
        solutionName: 'solquiz1_randomprocess_2018.pdf',
        solution: file['solquiz1_randomprocess_2018.pdf'],
      },
      {
        name: 'Midterm 1',
        file: file['midterm1_randomprocess_2018.pdf'],
        fileName: 'midterm1_randomprocess_2018.pdf',
        solutionName: 'solmid1_randomprocess_2018.pdf',
        solution: file['solmid1_randomprocess_2018.pdf'],
      },
      {
        name: 'Midterm 2',
        file: file['midterm2_randomprocess_2018.pdf'],
        fileName: 'midterm2_randomprocess_2018.pdf',
        solutionName: 'solmid2_randomprocess_2018.pdf',
        solution: file['solmid2_randomprocess_2018.pdf'],
      },
    ],
    dateCreated: '2018-08-09 08:59:03.062Z',
  },
  {
    active: false,
    code: '430.306',
    name: 'Signals and Systems',
    alias: 'SS430306_2018',
    time: 'Spring 2018',
    teachingTime: 'Tuesday and Thursday, 11:00am-12:15am, #201 College of Engineering Bldg. 301',
    textbook: [
      'Oppenheim, Willsky, and Nawab, Signals and Systems, 2nd ed., Prentice Hall.',
      'Prerequisite courses: calculus (engineering math), basic electric circuits'
    ],
    teachingAssistants: [
      '5b6bfd2f8a281c44ee0541f7',
      '5b6bfd2f8a281c44ee0541f9',
      '5b6bfd2f8a281c44ee0541fa'
    ],
    materials: [
      {
        name: 'Syllabus',
        file: file['syllabus_signal_systems2018.pdf'],
        fileName: 'syllabus_signal_systems2018.pdf',
      },
      {
        name: 'Homework 1',
        file: file['hw1_sigsys2018spring.pdf'],
        fileName: 'hw1_sigsys2018spring.pdf',
        solutionName: 'sol1_sigsys2018spring.pdf',
        solution: file['sol1_sigsys2018spring.pdf'],
      },
      {
        name: 'Homework 2',
        file: file['hw2_sigsys2018spring.pdf'],
        fileName: 'hw2_sigsys2018spring.pdf',
        solutionName: 'sol2_sigsys2018spring.pdf',
        solution: file['sol2_sigsys2018spring.pdf'],
      },
      {
        name: 'Homework 3',
        file: file['hw3_sigsys2018spring.pdf'],
        fileName: 'hw3_sigsys2018spring.pdf',
      },
      {
        name: 'Homework 4',
        file: file['hw4_sigsys2018spring.pdf'],
        fileName: 'hw4_sigsys2018spring.pdf',
      },
      {
        name: 'Homework 5',
        file: file['hw5_sigsys2018spring.pdf'],
        fileName: 'hw5_sigsys2018spring.pdf',
      },
      {
        name: 'Homework 6',
        file: file['hw6_sigsys2018spring.pdf'],
        fileName: 'hw6_sigsys2018spring.pdf',
      },
      {
        name: 'Quiz 1',
        file: file['quiz1_sigsys2018spring.pdf'],
        fileName: 'quiz1_sigsys2018spring.pdf',
        solution: file['solquiz1_sigsys2018spring.pdf'],
        solutionName: 'solquiz1_sigsys2018spring.pdf',
      },
    ],
    dateCreated: '2018-08-09 08:58:03.062Z',
  },
  {
    active: false,
    code: '430.523',
    name: 'Random Signal Theory',
    time: 'Fall 2017',
    dateCreated: '2018-08-09 08:57:03.062Z',
  },
  {
    active: false,
    code: '430.306',
    name: 'Signals and Systems',
    time: 'Spring 2017',
    dateCreated: '2018-08-09 08:56:03.062Z',
  },
  {
    active: false,
    code: '430.758',
    name: 'Special Topics on Signal Processing',
    time: 'Spring 2017',
    dateCreated: '2018-08-09 08:55:03.062Z',
  },
  {
    active: false,
    code: '430.317',
    name: 'Basics of Communication Systems',
    time: 'Fall 2016',
    dateCreated: '2018-08-09 08:54:03.062Z',
  },
  {
    active: false,
    code: '430.306',
    name: 'Signals and Systems',
    time: 'Spring 2016',
    dateCreated: '2018-08-09 08:53:03.062Z',
  },
  {
    active: false,
    code: '430.523',
    name: 'Random Signal Theory',
    time: 'Spring 2016',
    dateCreated: '2018-08-09 08:52:03.062Z',
  },
  {
    active: false,
    code: '400.018',
    name: 'Creative engineering design',
    time: 'Fall 2015',
    dateCreated: '2018-08-09 08:51:03.062Z',
  },
  {
    active: false,
    code: '430.306',
    name: 'Signals and Systems',
    time: 'Spring 2015',
    dateCreated: '2018-08-09 08:50:03.062Z',
  },
  {
    active: false,
    code: '430.523',
    name: 'Random Signal Theory',
    time: 'Spring 2015',
    dateCreated: '2018-08-09 08:49:03.062Z',
  },
  {
    active: false,
    code: '430.758',
    name: 'Special Topics on Signal Processing',
    time: 'Fall 2014',
    dateCreated: '2018-08-09 08:48:03.062Z',
  },
  {
    active: false,
    code: 'CRE795',
    name: 'Detection and Estimation Theory II',
    time: 'Spring 2014',
    dateCreated: '2018-08-09 08:47:03.062Z',
  },
  {
    active: false,
    code: 'CNCE494',
    name: 'Information Theory',
    time: 'Fall 2013',
    dateCreated: '2018-08-09 08:46:03.062Z',
  },
  {
    active: false,
    code: 'CNCE363',
    name: 'Probability and Random Process',
    time: 'Spring 2013',
    dateCreated: '2018-08-09 08:45:03.062Z',
  },
  {
    active: false,
    code: 'CRE674',
    name: 'Information theory',
    time: 'Fall 2012',
    dateCreated: '2018-08-09 08:44:03.062Z',
  },
  {
    active: false,
    code: 'CNCE494',
    name: 'Basic information theory',
    time: 'Fall 2012',
    dateCreated: '2018-08-09 08:43:03.062Z',
  },
  {
    active: false,
    code: 'CNCE363',
    name: 'Probability and Random Process',
    time: 'Spring 2012',
    dateCreated: '2018-08-09 08:42:03.062Z',
  },
  {
    active: false,
    code: 'CRE677',
    name: 'Detection and Estimation: Part I',
    time: 'Spring 2012',
    dateCreated: '2018-08-09 08:41:03.062Z',
  },
  {
    active: false,
    code: 'CNCE363',
    name: 'Probability and Random Process',
    time: 'Spring 2011',
    dateCreated: '2018-08-09 08:40:03.062Z',
  },
  {
    active: false,
    code: 'CRE675',
    name: 'Information Theory',
    time: 'Spring 2011',
    dateCreated: '2018-08-09 08:39:03.062Z',
  },
  {
    active: false,
    code: 'CNCE262',
    name: 'Engineering Mathematics II',
    time: 'Fall 2010',
    dateCreated: '2018-08-09 08:38:03.062Z',
  },
  {
    active: false,
    code: 'CNCE465',
    name: 'Digital Signal Processing II',
    time: 'Spring 2010',
    dateCreated: '2018-08-09 08:37:03.062Z',
  },
  {
    active: false,
    code: 'CRE677',
    name: 'Detection and Estimation Theory I',
    time: 'Fall 2010',
    dateCreated: '2018-08-09 08:36:03.062Z',
  },
];

export default course;