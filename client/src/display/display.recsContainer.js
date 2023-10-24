import {
  appendItemIfExists,
  createRecContainerElement,
} from "./display.utils.js";
import { recommendationFactory } from "../recommendations/factory/RecommendationFactory.js";

const appendRecItemIfExists = (father, item) =>
  appendItemIfExists(father, item);

const getRecommendationItemDiv = async (
  apiInstance,
  publisherInstance,
  recommendation
) => {
  const type = recommendation[apiInstance.typeProperty];
  const recommendationItem = recommendationFactory(
    apiInstance,
    publisherInstance,
    type,
    recommendation
  );

  return await recommendationItem.render();
};

export const createRecommendationsContainer = async (
  data,
  apiInstance,
  publisherInstance
) => {
  const recommendationsContainer = createRecContainerElement();

  await Promise.all(
    data.map(async (recommendation) => {
      const recommendationItemDiv = await getRecommendationItemDiv(
        apiInstance,
        publisherInstance,
        recommendation
      );

      appendRecItemIfExists(recommendationsContainer, recommendationItemDiv);
      return recommendationItemDiv;
    })
  );

  return recommendationsContainer;
};
