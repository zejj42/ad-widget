import { createHeaderSection } from "./display.header.js";
import { createRecommendationsContainer } from "./display.recsContainer.js";
import { createWidgetElement } from "./display.utils.js";

export const displayWidget = async (apiInstance, publisherInstance, data) => {
  const widget = createWidgetElement();

  const recommendationsContainer = await createRecommendationsContainer(
    data,
    apiInstance,
    publisherInstance
  );

  document.body.appendChild(widget);
  widget.appendChild(createHeaderSection());
  widget.appendChild(recommendationsContainer);
};
