import { TestApi } from "./implementations/testApi.js";

class ApiFactory {
  constructor() {
    this.apis = {
      TEST_API: TestApi,
    };
  }

  createApi(apiName) {
    const ApiClass = this.apis[apiName];
    if (!ApiClass) {
      throw new Error(`Unknown API source: ${apiName}`);
    }
    return new ApiClass();
  }
}

export default new ApiFactory();
