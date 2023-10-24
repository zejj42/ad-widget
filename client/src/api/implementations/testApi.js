import ApiBase from "../base/ApiBase.js";

export class TestApi extends ApiBase {
  constructor() {
    super({
      name: "TEST_API",
      baseUrl: "recommendations.get",
      appType: "desktop",
      apiKey: "f9040ab1b9c802857aa783c469d0e0ff7e7366e4",
      count: 5,
      listProperty: "list",
      typeProperty: "origin",
    });
  }

  map(apiData) {
    return {
      thumbnail: apiData.thumbnail[0].url,
      caption: apiData.name,
      source: apiData.branding,
      url: apiData.url,
    };
  }
}
