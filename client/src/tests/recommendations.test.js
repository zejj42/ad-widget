import ApiFactory from "../api/ApiFactory.js";
import PublisherFactory from "../publishers/PublisherFactory.js";
import { recommendationFactory } from "../recommendations/factory/RecommendationFactory.js";
import { Organic } from "../recommendations/implementations/Organic.js";

import {
  MOCK_FETCHED_RECOMMENDATION,
  TEST_API,
  TEST_PUBLISHER,
} from "./testUtils/test.constants.js";
import { hexToRgb } from "./testUtils/test.utils.js";

jest.mock("../display/display.errorHandlers.js", () => ({
  ...jest.requireActual("../display/display.errorHandlers.js"),
  applyFallbackOnImageError: jest.fn(() => Promise.resolve(true)),
}));

describe("RecommendationBase", () => {
  let apiInstance, publisherInstance, recommendationItem, div;

  beforeAll(() => {
    publisherInstance = PublisherFactory.createPublisher(TEST_PUBLISHER);
    apiInstance = ApiFactory.createApi(TEST_API);
  });

  beforeEach(async () => {
    jest.clearAllMocks();
    document.body.innerHTML = "";
    recommendationItem = recommendationFactory(
      apiInstance,
      publisherInstance,
      "sponsored",
      MOCK_FETCHED_RECOMMENDATION
    );

    div = await recommendationItem.render();
  });

  it("should apply styles correctly", () => {
    expect(div.style.color).toBe(hexToRgb(publisherInstance.textColor));
    expect(div.style.fontFamily).toBe(publisherInstance.fontFamily);
    expect(div.style.fontSize).toBe(publisherInstance.fontSize);
  });

  it("createRecommendationDiv", async () => {
    expect(div).not.toBeNull();
    expect(div.getAttribute("data-priority")).toBe(
      publisherInstance.priority.toString()
    );
  });

  it("should create an Organic recommendation", () => {
    const recommendation = recommendationFactory(
      apiInstance,
      publisherInstance,
      "organic",
      MOCK_FETCHED_RECOMMENDATION
    );

    expect(recommendation).toBeInstanceOf(Organic);
  });

  it("should throw an error for unknown recommendation type", () => {
    expect(() => {
      recommendationFactory(
        apiInstance,
        publisherInstance,
        "unknown",
        MOCK_FETCHED_RECOMMENDATION
      );
    }).toThrow("Unknown recommendation type: unknown");
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
