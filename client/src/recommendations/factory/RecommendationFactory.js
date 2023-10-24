import { Organic } from "../implementations/Organic.js";
import { Sponsored } from "../implementations/Sponsored.js";

export const recommendationFactory = (
  apiInstance,
  publisherInstance,
  type,
  apiData
) => {
  const recommendationData = apiInstance.map(apiData);

  if (type === "organic")
    return new Organic(recommendationData, publisherInstance);
  if (type === "sponsored")
    return new Sponsored(recommendationData, publisherInstance);

  throw new Error(`Unknown recommendation type: ${type}`);
};
