import { RECOMMENDATION_ITEM_CLASS } from "../../constants/cssClasses.js";
import {
  addCaption,
  addThumbnail,
  applyStylesToElement,
} from "../../display/display.utils.js";
import { RENDER_IMPLEMENT_BY_SUBCLASS } from "../../constants/errors.js";

class RecommendationBase {
  constructor(recommendation, publisherInstance) {
    this.recommendation = recommendation;
    this.publisherInstance = publisherInstance;
  }

  applyStyles(div) {
    const { themeColor, textColor, accentColor, fontFamily, fontSize } =
      this.publisherInstance;
    applyStylesToElement(div, {
      backgroundColor: themeColor,
      color: textColor,
      borderColor: accentColor,
      fontFamily,
      fontSize,
    });
  }

  async createRecommendationDiv() {
    const { thumbnail, caption } = this.recommendation;
    const { defaultImageSrc, priority, displayRecOnFail } =
      this.publisherInstance;

    const recommendationDiv = document.createElement("div");
    recommendationDiv.classList.add(RECOMMENDATION_ITEM_CLASS);
    recommendationDiv.setAttribute("data-priority", priority);

    const didRecImgFail = await addThumbnail(
      recommendationDiv,
      thumbnail,
      defaultImageSrc
    );

    addCaption(recommendationDiv, caption);
    this.applyStyles(recommendationDiv);

    if (didRecImgFail && !displayRecOnFail) return null;
    return recommendationDiv;
  }

  async render() {
    throw new Error(RENDER_IMPLEMENT_BY_SUBCLASS);
  }
}

export default RecommendationBase;
