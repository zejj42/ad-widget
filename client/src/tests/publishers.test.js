import PublisherFactory from "../publishers/PublisherFactory.js";
import { TestPublisher } from "../publishers/implementations/TestPublisher.js";

describe("Publisher Factory Suite", () => {
  it("Should create a TestPublisher instance", () => {
    const testPublisher = PublisherFactory.createPublisher("TEST_PUBLISHER");
    expect(testPublisher).toBeInstanceOf(TestPublisher);
  });

  it("Should throw error if unknown publisher name is provided", () => {
    const unknownPublisherName = "UNKNOWN_PUBLISHER";

    expect(() =>
      PublisherFactory.createPublisher(unknownPublisherName)
    ).toThrow(`Unknown publisher source: ${unknownPublisherName}`);
  });
  it("Should override default properties when options are provided", () => {
    const overrideOptions = {
      publisherId: "override-id",
      totalRecs: 10,
    };
    const testPublisher = PublisherFactory.createPublisher(
      "TEST_PUBLISHER",
      overrideOptions
    );

    expect(testPublisher.publisherId).toBe(overrideOptions.publisherId);
    expect(testPublisher.totalRecs).toBe(overrideOptions.totalRecs);
  });

  it("Should filter out invalid properties", () => {
    const invalidOptions = {
      invalidProp: "someValue",
      anotherInvalidProp: 1234,
    };
    const testPublisher = PublisherFactory.createPublisher(
      "TEST_PUBLISHER",
      invalidOptions
    );

    expect(testPublisher).not.toHaveProperty("invalidProp");
    expect(testPublisher).not.toHaveProperty("anotherInvalidProp");
  });
});
