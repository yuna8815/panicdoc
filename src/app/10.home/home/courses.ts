import { CourseDef, ProgramDef } from 'src/smd-common';

export const RelaxTraining: CourseDef = {
  icon: 'icon4', name: '이완훈련 하기',
  duration: 8, status: 'ready',
  link: 'program3/course4/1',
  count: 1,
}

const CoursesWeek1: ProgramDef = {
  title: '공황장애 알아보기',
  description: '첫 주에는 공황장애에 대해 알아봅니다.<br />공황장애를 바로 아는 것에서 치료가 시작됩니다.',
  courses: [
    {
      icon: 'icon3', name: '공황장애 이해하기',
      duration: 5, status: 'ready',
      link: 'program/program1/course1',
    },
    {
      icon: 'icon5', name: 'Quiz : 공황장애 바로 알기',
      duration: 10, status: 'ready',
      link: 'program/program1/course2',
    },
  ]
};

const CoursesWeek2: ProgramDef = {
  title: '나의 공황 바라보기',
  description: '두 번째 주는 나의 공황(불안)을 객관적으로 관찰하고,<br />기록하는 것을 배우도록 하겠습니다.',
  courses: [
    {
      icon: 'icon1', name: '공황과 불안 관찰하고 기록하기',
      duration: 3, status: 'complete',
      link: 'program2/course1/1',
    },
    {
      icon: 'icon2', name: '공황과 불안 파헤치기',
      duration: 8, status: 'ready',
      link: 'program2/course2/1',
    },
  ]
};

const CoursesWeek3: ProgramDef = {
  title: '이완훈련을 통한 신체감각 다스리기',
  description: '세 번째 주는 이완훈련이 왜 필요한지 알아보고<br />복식호흡과 점진적 근육이완을 배우겠습니다.',
  courses: [
    {
      icon: 'icon3', name: '이완훈련이 왜 필요할까요?',
      duration: 5, status: 'complete',
      link: 'program3/course1/1',
    },
    {
      icon: 'icon1', name: '복식호흡 배우기',
      duration: 3, status: 'ready',
      link: 'program3/course2/1',
    },
    {
      icon: 'icon2', name: '점진적 근육이완 배우기',
      duration: 8, status: 'ready',
      link: 'program3/course3/1',
    },
    {
      ...RelaxTraining,
      home: '3',
    },
  ]
};

const CoursesWeek4: ProgramDef = {
  title: '나의 생각 바라보기',
  description: '이번 주는 공황에 대한 나의 생각을 살펴보겠습니다.<br />생각(인지)의 오류를 찾아봅시다.',
  courses: [
    {
      icon: 'icon3', name: '공항과 나의 생각',
      duration: 5, status: 'complete',
      link: 'program4/course1/1',
    },
    {
      icon: 'icon1', name: '인지왜곡 찾기',
      duration: 3, status: 'ready',
      link: 'program4/course2/1',
    },
    {
      icon: 'icon2', name: '나의 공황에서 인지왜곡 찾기',
      duration: 8, status: 'ready',
      link: 'program4/course3/1',
    },
    {
      ...RelaxTraining,
      home: '4',
      status: 'waiting',
    },
  ]
};

const CoursesWeek5: ProgramDef = {
  title: '내 생각 바로잡기',
  description: '이번 주는 여러 가지 시나리오를 통해<br />인지왜곡을 찾아 바꿔보는 프로그램을 진행합니다.',
  courses: [
    {
      icon: 'icon3', name: '두려운 생각 다스리기',
      duration: 5, status: 'complete',
      link: 'program5/course1/1',
    },
    {
      icon: 'icon1', name: '스스로 인지왜곡 찾고 바로잡기 1',
      duration: 3, status: 'ready',
      link: 'program5/course2/0',
    },
    {
      icon: 'icon2', name: '스스로 인지왜곡 찾고 바로잡기 2',
      duration: 8, status: 'ready',
      link: 'program5/course3/1',
    },
    {
      icon: 'icon5', name: '스스로 인지왜곡 찾고 바로잡기 3',
      duration: 8, status: 'ready',
      link: 'program5/course4/1',
    },
    {
      ...RelaxTraining,
      home: '5',
    },
  ]
};

const CoursesWeek6: ProgramDef = {
  title: '내 증상 마주하기',
  description: '이번 주는 내가 직접 공황과 비슷한 상태를<br />만들어 훈련하는 증상노출 훈련법을 배웁니다.',
  courses: [
    {
      icon: 'icon3', name: '증상 노출훈련이 왜 필요할까..',
      duration: 5, status: 'complete',
      link: 'program6/course1/1',
    },
    {
      icon: 'icon1', name: '증상 노출훈련',
      duration: 5, status: 'ready',
      link: 'program6/course2/1',
    },
    {
      icon: 'icon2', name: '증상 노출훈련하기',
      duration: 10, status: 'ready',
      link: 'program6/course3/1',
    },
    {
      ...RelaxTraining,
      home: '6',
    },
  ]
};

const CoursesWeek7: ProgramDef = {
  title: '일상생활에서 훈련하기',
  description: '이번 주는 실제 나의 공황 촉발 요인에<br />직접 노출하여 훈련해 보는 시간을 갖습니다.',
  courses: [
    {
      icon: 'icon3', name: '일상활동 노출훈련',
      duration: 5, status: 'complete',
      link: 'program7/course1/1',
    },
    {
      icon: 'icon1', name: '일상활동 노출훈련 계획하기',
      duration: 10, status: 'ready',
      link: 'program7/course2/1',
    },
    {
      icon: 'icon2', name: '일상활동 노출훈련 하기',
      duration: 10, status: 'ready',
      link: 'program7/course3/1',
    },
    {
      ...RelaxTraining,
      home: '7',
    },
  ]
};

const CoursesWeek8: ProgramDef = {
  title: '치료를 마치며',
  description: '마지막 주 입니다. 지금까지 배우고 훈련한<br />인지행동치료를 정리하고 직접 계획을 세워 봅니다.',
  courses: [
    {
      icon: 'icon3', name: 'PDSS, APPQ검사',
      duration: 5, status: 'complete',
      link: 'program8/course1/1',
    },
    {
      icon: 'icon1', name: 'PanicDoc 최종 리포트',
      duration: 5, status: 'ready',
      link: 'program8/course2/1',
    },
    {
      icon: 'icon2', name: '나의 훈련 계획 세우기',
      duration: 10, status: 'ready',
      link: 'program8/course3/1',
    },
    {
      icon: 'icon5', name: '인지행동치료를 마치며',
      duration: 10, status: 'ready',
      link: 'program8/course4/1',
    },
  ]
};

const CoursesP2_1: ProgramDef = {
  title: '나의 공황 바라보기 복습시간',
  description: '나를 객관적으로 관찰하고 기록하는 것은 치료의 기본입니다. 한 주간 감정일기를 작성 해 봅시다.',
  courses: [
    {
      icon: 'icon3', name: '감정일기 작성이 왜 중요할까요?',
      duration: 5, status: 'complete',
      link: 'p2_1/course1/1',
    },
    {
      icon: 'icon1', name: '나의 불안과 공황은 어디서 오는가?',
      duration: 5, status: 'ready',
      link: 'p2_1/course2/1',
    },
    {
      ...RelaxTraining,
      home: '9',
    },
  ]
};

const CoursesP2_2: ProgramDef = {
  title: '나의 공황 바라보기 복습시간',
  description: '나를 객관적으로 관찰하고 기록하는 것은 치료의 기본입니다. 한 주간 감정일기를 작성 해 봅시다.',
  courses: [
    {
      icon: 'icon3', name: '감정일기 작성은 치료의 핵심입니다',
      duration: 5, status: 'complete',
      link: 'p2_2/course1/1',
    },
    {
      icon: 'icon1', name: '나를 관찰하며 인지왜곡 찾기',
      duration: 5, status: 'ready',
      link: 'p2_2/course2/1',
    },
    {
      ...RelaxTraining,
      home: '9',
    },
  ]
};

const CoursesP5: ProgramDef = {
  title: '노출훈련 준비하기',
  description: '다음 주 부터 노출훈련을 진행하기 전 이완훈련과 인지왜곡을 바로잡는 프로그램을 복습해 보겠습니다.',
  courses: [
    {
      icon: 'icon3', name: '공황을 다스리는 이완훈련',
      duration: 5, status: 'complete',
      link: 'p5/course1/1',
    },
    'trainings',
    {
      icon: 'icon1', name: '나의 공황에 대한 인지 재구성',
      duration: 5, status: 'ready',
      link: 'p5/course2/1',
    },
    {
      ...RelaxTraining,
      home: '9',
    },
  ]
};

const CoursesP7: ProgramDef = {
  title: '노출훈련 보강하기',
  description: '2주간 진행했던 증상 노출훈련과 일상활동 노출훈련을 추가로 진행합니다.',
  courses: [
    {
      icon: 'icon3', name: '노출훈련의 중요성',
      duration: 5, status: 'complete',
      link: 'p7/course1/1',
    },
    'trainings2',
    {
      icon: 'icon1', name: '증상 노출훈련하기',
      duration: 5, status: 'ready'
    },
    {
      icon: 'icon1', name: '일상활동 노출훈련하기',
      duration: 5, status: 'ready'
    },
    {
      ...RelaxTraining,
      home: '9',
    },
  ]
};

export const CourseData: { [_: string]: ProgramDef } = {
  1: CoursesWeek1, 2: CoursesWeek2, 3: CoursesWeek3, 4: CoursesWeek4,
  5: CoursesWeek5, 6: CoursesWeek6, 7: CoursesWeek7, 8: CoursesWeek8,
  p2_1: CoursesP2_1, p2_2: CoursesP2_2, p5: CoursesP5, p7: CoursesP7,
  diary: null,
};
