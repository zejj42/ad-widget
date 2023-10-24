import { addLinkClick, addSource } from "../../display/display.utils.js";
import RecommendationBase from "../base/RecommendationBase.js";

export class Sponsored extends RecommendationBase {
  async render() {
    const recommendationDiv = await this.createRecommendationDiv();

    if (recommendationDiv) {
      addSource(recommendationDiv, this.recommendation.source);
      addLinkClick(recommendationDiv, this.recommendation.url, true);
      return recommendationDiv;
    }
  }
}
