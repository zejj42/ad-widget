const {
  INCORRECT_NETWORK_RESPONSE,
  NO_FETCH_DATA_RECEIVED,
} = require("../constants/errors.js");
const {
  fetchServerConfig,
  fetchRecommendations,
  getFetchRecommendationsEndpoint,
} = require("../fetch/fetch.js");
const {
  MOCK_FETCHED_RECOMMENDATIONS,
  MOCK_API_INSTANCE,
  MOCK_PUBLISHER_INSTANCE,
  FETCH_RECOMMENDATIONS_REQUEST_CONFIG,
  MOCK_FETCHED_CONFIG,
} = require("./testUtils/test.constants.js");
const {
  mockMultipleFailedFetchResponses,
  mockMultipleNullFetchResponses,
  mockOkRecsResponse,
} = require("./testUtils/test.utils.js");

global.fetch = jest.fn();

describe("Fetch Suite", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("Should successfully fetch server config", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => MOCK_FETCHED_CONFIG,
      ok: true,
      status: 200,
    });

    const result = await fetchServerConfig();
    expect(result).toEqual(MOCK_FETCHED_CONFIG);
  });

  it("Should throw error when server config response is not ok", async () => {
    const errorStatus = 500;
    fetch.mockResolvedValueOnce({
      json: async () => MOCK_FETCHED_CONFIG,
      ok: false,
      status: errorStatus,
    });

    await expect(fetchServerConfig()).rejects.toThrow(
      `${INCORRECT_NETWORK_RESPONSE}. Status: ${errorStatus}`
    );
  });

  it("Should construct the correct URL for fetching recommendations", async () => {
    mockOkRecsResponse();

    await fetchRecommendations(MOCK_API_INSTANCE, MOCK_PUBLISHER_INSTANCE);
    const endPoint = getFetchRecommendationsEndpoint(
      MOCK_API_INSTANCE,
      MOCK_PUBLISHER_INSTANCE.publisherId
    );

    expect(fetch).toHaveBeenCalledWith(
      endPoint,
      FETCH_RECOMMENDATIONS_REQUEST_CONFIG
    );
  });

  it("Should throw error if fetch recommendations response is not ok", async () => {
    const retries = 3;
    const errorStatus = 500;

    mockMultipleFailedFetchResponses(retries);

    await expect(
      fetchRecommendations(MOCK_API_INSTANCE, MOCK_PUBLISHER_INSTANCE)
    ).rejects.toThrowError(
      new Error(`${INCORRECT_NETWORK_RESPONSE}. Status: ${errorStatus}`)
    );
  });

  it("Should throw error if no data is received", async () => {
    const retries = 3;
    mockMultipleNullFetchResponses(retries);

    await expect(
      fetchRecommendations(MOCK_API_INSTANCE, MOCK_PUBLISHER_INSTANCE)
    ).rejects.toThrowError(NO_FETCH_DATA_RECEIVED);
  });
  it("Should retry fetching data according to the provided retries count", async () => {
    const retries = 3;
    mockMultipleFailedFetchResponses(retries - 1);

    mockOkRecsResponse();
    const result = await fetchRecommendations(
      MOCK_API_INSTANCE,
      MOCK_PUBLISHER_INSTANCE
    );

    expect(result).toEqual(
      MOCK_FETCHED_RECOMMENDATIONS[MOCK_API_INSTANCE.listProperty]
    );

    expect(fetch).toHaveBeenCalledTimes(retries);
  });
});
