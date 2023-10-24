import {
  DIVIDER_LINE_ID,
  HEADER_SECTION_ID,
  LEFT_HEADER_ID,
  RIGHT_HEADER_ID,
} from "../constants/cssClasses.js";
import {
  createDiv,
  createElementWithAttributes,
  createHr,
  createSpan,
} from "./display.utils.js";

const createArrow = () =>
  createSpan({
    id: "arrow",
    innerHTML: "&rarr;",
  });

const createLeftHeader = () => {
  return createSpan({
    id: LEFT_HEADER_ID,
    textContent: "MORE FOR YOU",
  });
};

const createRightHeader = () => {
  const rightHeader = createSpan({
    id: RIGHT_HEADER_ID,
    textContent: "Promoted Links By Taboola ",
  });
  const arrow = createArrow();
  rightHeader.appendChild(arrow);
  return rightHeader;
};

const createDividerLine = () => {
  return createHr({
    id: DIVIDER_LINE_ID,
  });
};

export const createHeaderSection = () => {
  const headerSection = createDiv({
    id: HEADER_SECTION_ID,
  });

  headerSection.appendChild(createLeftHeader());
  headerSection.appendChild(createRightHeader());
  headerSection.appendChild(createDividerLine());
  return headerSection;
};
