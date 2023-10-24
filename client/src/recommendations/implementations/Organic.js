import { addLinkClick } from "../../display/display.utils.js";
import RecommendationBase from "../base/RecommendationBase.js";

export class Organic extends RecommendationBase {
  async render() {
    const recommendationDiv = await this.createRecommendationDiv();
    if (recommendationDiv) {
      addLinkClick(recommendationDiv, this.recommendation.url, false);
      return recommendationDiv;
    }
  }
}
