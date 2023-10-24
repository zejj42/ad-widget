import {
  CAPTION_CLASS,
  RECOMMENDATION_CONTAINER_ID,
  RECOMMENDATION_WIDGET_ID,
  SOURCE_CLASS,
} from "../constants/cssClasses.js";
import { applyFallbackOnImageError } from "./display.errorHandlers.js";

export const addThumbnail = async (father, value, fallbackSrc) => {
  const thumbnail = document.createElement("img");
  thumbnail.src = value || fallbackSrc;
  thumbnail.alt = "thumbnail";
  const didRecImgFail = await applyFallbackOnImageError(thumbnail, fallbackSrc);
  father.appendChild(thumbnail);
  return didRecImgFail;
};

const addParagraphItem = (father, value, maxLength, className) => {
  const item = document.createElement("p");
  item.textContent = value;
  item.classList.add(className);
  father.appendChild(item);
};

export const addCaption = (father, value, maxLength) =>
  addParagraphItem(father, value, maxLength, CAPTION_CLASS);

export const addSource = (father, value) =>
  addParagraphItem(father, value, null, SOURCE_CLASS);

const addOpenLink = (isNewTab, linkUrl) => {
  return () => {
    if (isNewTab) {
      window.open(linkUrl, "_blank");
    } else {
      window.location.href = linkUrl;
    }
  };
};
export const addLinkClick = (element, linkUrl, isNewTab) => {
  const openLink = addOpenLink(isNewTab, linkUrl);
  element.addEventListener("click", openLink);
};

export const getRecommendationsCount = (publisherInstance) => {
  return window.innerWidth <= 768
    ? publisherInstance.recsMobile
    : publisherInstance.recsDesktop;
};

const setStyle =
  (element) =>
  ([attribute, value]) => {
    element.style[attribute] = value;
  };

export const applyStylesToElement = (element, styles) => {
  Object.entries(styles).forEach(setStyle(element));
};

export const createElementWithAttributes = (type, attributes = {}) => {
  const element = document.createElement(type);
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "textContent" || key === "innerHTML") {
      element[key] = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  return element;
};

export const createDiv = (attributes) =>
  createElementWithAttributes("div", attributes);

export const createSpan = (attributes) =>
  createElementWithAttributes("span", attributes);

export const createHr = (attributes) =>
  createElementWithAttributes("hr", attributes);

export const appendItemIfExists = (father, item) => {
  if (item) {
    father.appendChild(item);
  }
};
export const createWidgetElement = () =>
  createDiv({
    id: RECOMMENDATION_WIDGET_ID,
  });

export const createRecContainerElement = () =>
  createDiv({
    id: RECOMMENDATION_CONTAINER_ID,
  });
