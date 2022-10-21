import { messages } from './messages';

export const Symptoms = [
  '심장의 두근거림',
  '땀 흘림',
  '몸이 떨리거나 후들거림',
  '숨가쁜 느낌 또는 숨이 막히는 느낌',
  '질식할 것 같은 느낌',
  '흉부 통증 또는 가슴 불편감',
  '토할 것 같은 느낌 또는 복부 불편감',
  '어지러움, 불안정감, 멍한 느낌, 쓰러질 것 같음',
  '춥거나 화끈거리는 느낌',
  '감각 이상(둔해지거나 따끔거리는 느낌 등)',
  '비현실감 또는 이인증(나에게서 분리된 느낌)',
  '스스로 통제할 수 없거나 미칠것 같은 두려움',
  '죽을 것 같은 공포감',
];

export const PanicFactors = {
  '지하철을 이용할 때': false,
  '버스를 이용할 때': false,
  '운전할 때': false,
  '터널이나 다리를 건널 때': false,
  '사람 많은 쇼핑몰, 마트 등 실내 공간에 갈 때': false,
  '카페나 식당, 공공장소에 머무를 때': false,
  '극장에서 영화를 볼 때': false,
  '엘리베이터를 탔을 때': false,
  '답답하거나 막힌 공간에 있을 때': false,
  '여행할 때': false,
  '집에 혼자 있을 때': false,
  '샤워, 목욕 또는 사우나 갔을 때': false,
  '과식했을 때': false,
  '커피 마실 때': false,
  '술 마신 다음날': false,
  '격한 운동을 했을 때': false,
  '회의나 모임에 참여했을 때': false,
  '발표할 때': false,
  '대화나 말다툼 중에': false,
  '심한 스트레스를 받았을 때': false,
  '수면 중에': false,
  '너무 덥거나 추울 때': false,
  [messages.Etc]: false,
};

export interface ExposureTrainingRecord {
  icon: string;
  name: string;
  date: Date;
  complete: boolean;
  duration: number;
  similarity: number,
  thought: string;
  behavior: string;
  symptoms?: string[];
}

// 일상활동 노출훈련 기록
export interface DailyExposureTrainingRecord {
  name: string;
  description: string;
  date: Date;
  location?: string;
  thought?: string;
  behavior?: string;
  symptoms?: string[];
  beforeFearLevel?: number;
  afterFearLevel?: number;
}

export interface CourseDef {
  icon: string;
  name: string;
  duration: number;
  status: 'ready' | 'complete' | 'waiting';
  link?: string;
  home?: string;
  count?: number;
}

export interface ProgramDef {
  title: string;
  description?: string;
  courses: (CourseDef | string)[];
}

export interface ProgramSet {
  name: string;
  programs: ProgramDef[];
}

export interface EmotionScore {
  anxiety?: number;
  sadness?: number;
  control?: number;
}

export interface PrescriptionDef {
  name: string;
  period: [Date, Date];
  scores: EmotionScore;
}

export interface EmotionDiaryDef {
  date: Date;
  scores?: EmotionScore;
  thought?: string;
  behavior?: string;
}

export interface PanicLogItem {
  time: Date;
  triggerFactor?: string;
  symptom?: string;
  thought?: string;
  behavior?: string;
}

export const GradeLabels1 = [
  '전혀',
  '약간',
  '중간',
  '현저한',
  '극심한',
];

export const GradeLabels2 = ['전혀', '중간', '최상'];

export const TimeFormat_yyyyMMdd = 'yyyy년 MM월';
export const TimeFormat_yyyyMMdd_e = 'yyyy년 MM월 dd일(E)';
export const TimeFormat_MMdd_e = 'M월 d일(E)';
export const TimeFormat_yyyyMMdd_e_a_hhmm = 'yyyy년 MM월 dd일(E) a hh:mm';

export const DailyTrainingCompleteMessages = {
  step1: [
`1단계 훈련에 대한 수행도와 공포치가 많이 높았던 것 같습니다.
한 번의 노출로 불안 점수가 변화하는지 여부는 중요하지 않습니다. 노출 직후의 변화보다는 훈련을 무사히 마친 경험이 쌓여 점점 안전함을 느낄 수 있게 되는 것이 더 중요합니다.

다시 한번 1단계 훈련을 진행하여
두려움을 마주해 보세요.
점점 나아지는 모습을 볼 수 있습니다.`,
//
`내가 세운 계획을 직접 훈련하여 무사히 끝마치고 노출이 안전하며 견딜만하다는 것을 경험해보는 것 자체가 큰 성과입니다.

훈련 이후 공포감이 어느 정도 있었던 것 같습니다.
훈련 후 공포감이 2점 이하가 될 때까지
1단계를 반복하는 것이 좋습니다.

그러나 원한다면 2단계를 진행해 볼 수도 있습니다.

어떤 단계가 더 적합할지 충분히 고려하여
단계 진행을선택 해주세요.`,
//
`내가 세운 계획을 직접 훈련하여 무사히 끝마치고 노출이 안전하며 견딜만하다는 것을 경험해보는 것 자체가 큰 성과입니다.

나의 일상생활 노출훈련을 통해 단계적으로
나아지는 나의 모습을 발견해 보세요.

이제 2단계 훈련을 진행할 수 있습니다.
2단계 훈련을 진행 후 훈련 기록을 남겨주세요. `,],

  step2: [
//
`훈련이 많이 두려웠을 수 있습니다.
하지만 계획을 세우고  마친 것 자체에 큰 의미가 있습니다.

2단계 훈련에 대한 수행도와 공포치가
많이 높았던 것 같습니다.

훈련을 어느 정도 감내할 수 있었다면 2단계 훈련을 다시 해보는 것을 권합니다. 2단계 훈련이 어려웠다 하더라도 못한 부분을 자책하기 보다는 해낸 부분에 대해 스스로를 더 칭찬합시다.

정말 2단계가 어렵다고 느껴진다면 1단계를 반복한 뒤  2단계를 진행하여도 좋습니다. 하지만 내가 2단계를 부분적으로 달성했던 것을 기억해주세요. 그리고 준비가 되었다면 다시 시도해주세요.`,
//
`내가 세운 계획을 직접 훈련해 보는 것 자체가
큰 성과입니다.

훈련 이후 공포감이 어느 정도 있었던 것 같습니다.
훈련 후 공포감이 2점 이하가 될 때까지
2단계를 반복하는 것이 좋습니다.

그러나 원한다면 3단계를 진행해 볼 수도 있습니다.

나의 상태를 잘 생각해 보고 단계 진행을
선택해 주세요. `,
//
`2단계 훈련까지 잘 마치셨군요!
불안과 공황에 나아지는 나의 모습을
발견해 보았을까요?
아주 잘하고 있습니다!

이제 3단계 훈련을 진행할 수 있습니다.
3단계 훈련을 진행 후 훈련 기록을 남겨주세요. `,],

  step3: [
//
`3단계 훈련이 어려웠다 하더라도 못한 부분을 자책하기 보다는 해낸 부분에 대해 스스로를 더 칭찬합시다.

3단계가 많이 힘드셨다면  2단계를 반복한 뒤  3단계를 진행하여도 좋습니다. 하지만 내가 3단계를 부분적으로 달성했던 것을 기억하고 준비가 되었을 때 다시 시도해주세요. `,
//
`훈련 이후 공포감이 어느 정도 있었던 것 같습니다.

노출 훈련 직후 약간의 공포감이 남아있는 것은 당연한 것입니다. 하지만 다음 노출 시에는 지금보다 공포감이 줄어들어 있을 것입니다.
계속하여 3단계를 진행하여
불안과 공황에 대한 두려움을 낮춰볼까요?

3단계가 많이 힘드셨다면  2단계를 반복한 뒤
3단계를 진행하여도 좋습니다.
하지만 내가 3단계를 부분적으로 달성했던 것을 기억하고 준비가 되었을 때 다시 시도해주세요. `,
//
`3단계 훈련까지 잘 마치셨군요!
일상활동에서 나의 불안과 공황을
잘 이겨냈습니다!

같은 상황에서도
다시 불안과 공황의 정도가 높아질 수 있으나
그것은 재발이 아니라 치료의 한 과정입니다.
단계별로 훈련을 이어나갔던
지금을 꼭 기억해 주세요.

나는 불안과 공황을 스스로 다스릴 수 있습니다.`]
};
