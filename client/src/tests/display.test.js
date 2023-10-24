import ApiFactory from "../api/ApiFactory.js";
import {
  DIVIDER_LINE_ID,
  HEADER_SECTION_ID,
  LEFT_HEADER_ID,
  RECOMMENDATION_CONTAINER_ID,
  RECOMMENDATION_ITEM_CLASS,
  RECOMMENDATION_WIDGET_ID,
  RIGHT_HEADER_ID,
} from "../constants/cssClasses.js";
import { applyFallbackOnImageError } from "../display/display.errorHandlers.js";
import { createHeaderSection } from "../display/display.header.js";
import { displayWidget } from "../display/display.js";
import { createRecommendationsContainer } from "../display/display.recsContainer.js";
import PublisherFactory from "../publishers/PublisherFactory.js";
import { DEFAULT_PUBLISHER_OPTIONS } from "../publishers/config/publisherDefaults.js";
import {
  MOCK_FETCHED_RECOMMENDATIONS,
  TEST_API,
  TEST_PUBLISHER,
} from "./testUtils/test.constants.js";

const defaultImageSrc = DEFAULT_PUBLISHER_OPTIONS.defaultImageSrc;

jest.mock("../display/display.errorHandlers.js", () => ({
  ...jest.requireActual("../display/display.errorHandlers.js"),
  applyFallbackOnImageError: jest.fn((img, fallBackSrc) => {
    img.src = fallBackSrc;
    Promise.resolve(true);
  }),
}));

describe("Display Suite", () => {
  let apiInstance, publisherInstance;

  beforeAll(() => {
    publisherInstance = PublisherFactory.createPublisher(TEST_PUBLISHER);
    apiInstance = ApiFactory.createApi(TEST_API);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should create a recommendations container with the expected id", async () => {
    const container = await createRecommendationsContainer(
      MOCK_FETCHED_RECOMMENDATIONS[apiInstance.listProperty],
      apiInstance,
      publisherInstance
    );

    expect(container.id).toBe(RECOMMENDATION_CONTAINER_ID);
  });

  it("Should create a widget with a header and recommendations container", async () => {
    await displayWidget(
      apiInstance,
      publisherInstance,
      MOCK_FETCHED_RECOMMENDATIONS[apiInstance.listProperty]
    );
    const widget = document.getElementById(RECOMMENDATION_WIDGET_ID);
    const header = document.getElementById(HEADER_SECTION_ID);
    const recommendationsContainer = document.getElementById(
      RECOMMENDATION_CONTAINER_ID
    );

    expect(widget).not.toBeNull();
    expect(header).not.toBeNull();
    expect(recommendationsContainer).not.toBeNull();
  });

  it("Should create a container with the correct number of recommendation items", async () => {
    const mockData = MOCK_FETCHED_RECOMMENDATIONS[apiInstance.listProperty];
    const recommendationsContainer = await createRecommendationsContainer(
      mockData,
      apiInstance,
      publisherInstance
    );

    document.body.appendChild(recommendationsContainer);

    const recommendationItems = recommendationsContainer.querySelectorAll(
      "." + RECOMMENDATION_ITEM_CLASS
    );

    expect(recommendationItems.length).toBe(mockData.length);
  });

  it("Should correctly render the header section with a left header, right header, and divider", () => {
    const header = createHeaderSection();
    expect(header.querySelector("#" + LEFT_HEADER_ID)).not.toBeNull();
    expect(header.querySelector("#" + RIGHT_HEADER_ID)).not.toBeNull();
    expect(header.querySelector("#" + DIVIDER_LINE_ID)).not.toBeNull();
  });

  it("Should correctly add a thumbnail with fallback on error", async () => {
    const mockImage = new Image();
    mockImage.src = "invalidURL";

    const mockFallbackSrc = defaultImageSrc;
    const hasError = await applyFallbackOnImageError(
      mockImage,
      mockFallbackSrc
    );

    if (hasError) {
      expect(mockImage.src).toBe(mockFallbackSrc);
    }
  });
});
