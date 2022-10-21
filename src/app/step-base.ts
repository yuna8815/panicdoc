
export interface StepBase {

  nextDisabled?: () => boolean;

  clickOnDisabled?: () => void;

  // false이면 다음 페이지로 넘김 실패
  next?: () => boolean | Promise<boolean>;

  // 왼쪽 버튼
  front?: () => void;

  // 상단 버튼
  top?: () => void;
  topButtonText?: () => string;

  hideNext?: () => boolean;

  getButtonText?: () => string;
}

export async function processNext(stepContent?: StepBase) {
  let nextReturn = stepContent?.next?.();
  if (typeof nextReturn == 'object') {
    nextReturn = await nextReturn;
  }
  if (typeof nextReturn == 'boolean') {
    if (!nextReturn) {
      return false;
    }
  }
  return true;
}
