import ApiFactory from "../api/ApiFactory.js";
import ApiBase from "../api/base/ApiBase.js";
import { TestApi } from "../api/implementations/testApi.js";
import { MAP_IMPLEMENT_BY_SUBCLASS } from "../constants/errors.js";
import { TEST_API } from "./testUtils/test.constants.js";

describe("API Factory Suite", () => {
  it("Should create a TestApi instance", () => {
    const testApi = ApiFactory.createApi(TEST_API);
    expect(testApi).toBeInstanceOf(TestApi);
  });

  it("Should throw error if unknown API name is provided", () => {
    const unknownApiName = "UNKNOWN_API";
    expect(() => ApiFactory.createApi(unknownApiName)).toThrow(
      `Unknown API source: ${unknownApiName}`
    );
  });

  it("Should have default properties when creating a TestApi instance", () => {
    const testApi = ApiFactory.createApi(TEST_API);
    expect(testApi.name).toBe(TEST_API);
    expect(testApi.baseUrl).toBe("recommendations.get");
  });

  it("Should map apiData correctly in TestApi", () => {
    const testApi = ApiFactory.createApi(TEST_API);
    const mockApiData = {
      thumbnail: [{ url: "mockUrl" }],
      name: "mockName",
      branding: "mockBranding",
      url: "mockUrl",
    };
    const expectedMappedData = {
      thumbnail: "mockUrl",
      caption: "mockName",
      source: "mockBranding",
      url: "mockUrl",
    };
    expect(testApi.map(mockApiData)).toEqual(expectedMappedData);
  });

  it("Should throw error when map function is called on ApiBase", () => {
    const mockApiBase = new ApiBase({ name: "MockApiBase" });

    expect(() => mockApiBase.map({})).toThrow(MAP_IMPLEMENT_BY_SUBCLASS);
  });
});
