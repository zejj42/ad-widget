import { TestPublisher } from "./implementations/TestPublisher.js";

class PublisherFactory {
  constructor() {
    this.publishers = {
      TEST_PUBLISHER: TestPublisher,
    };
  }

  createPublisher(publisherName, options = {}) {
    const PublisherClass = this.publishers[publisherName];
    if (!PublisherClass) {
      throw new Error(`Unknown publisher source: ${publisherName}`);
    }
    return new PublisherClass(options);
  }
}

export default new PublisherFactory();
