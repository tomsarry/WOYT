import { YearInfo } from "./ContainerYear";

const getClassBtn = (open: Boolean): string => {
  if (open) {
    return "btn-resize less";
  } else {
    return "btn-resize more";
  }
};

const getClassContainer = (open: Boolean): string => {
  if (open) {
    return "container opened";
  } else {
    return "container closed";
  }
};

const getNumberYears = (yearInfo: YearInfo[]) => {
  if (!yearInfo) {
    return 0;
  } else if (yearInfo.length == 1) {
    return 1;
  }
  let lastYear = yearInfo[yearInfo.length - 1].Year;
  let firstYear = yearInfo[0].Year;
  return lastYear - firstYear + 1;
};

export { getClassBtn, getClassContainer, getNumberYears };
