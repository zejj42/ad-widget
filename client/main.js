import { displayWidget } from "./src/display/display.js";
import ApiFactory from "./src/api/ApiFactory.js";
import { fetchRecommendations, fetchServerConfig } from "./src/fetch/fetch.js";
import PublisherFactory from "./src/publishers/PublisherFactory.js";

const main = async () => {
  const { API_NAME, PUBLISHER_NAME } = await fetchServerConfig();
  const publisherInstance = PublisherFactory.createPublisher(PUBLISHER_NAME);
  const apiInstance = ApiFactory.createApi(API_NAME);

  const recommendations = await fetchRecommendations(
    apiInstance,
    publisherInstance
  );

  await displayWidget(apiInstance, publisherInstance, recommendations);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}
