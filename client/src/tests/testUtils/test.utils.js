import { MOCK_FETCHED_RECOMMENDATIONS } from "./test.constants";

const jestFetch = (mock) => fetch.mockResolvedValueOnce(mock);
const generateMockResponse = (json, ok, status) => {
  return {
    json,
    ok,
    ...(status && { status }),
  };
};

export const mockMultipleFailedFetchResponses = (retries, status = 500) => {
  for (let i = 0; i < retries; i++) {
    mockFailedFetchResponse(status);
  }
};

export const mockFailedFetchResponse = (status = 500) => {
  const mockFailedResponse = generateMockResponse(
    async () => ({}),
    false,
    status
  );
  jestFetch(mockFailedResponse);
};

export const mockMultipleNullFetchResponses = (retries) => {
  for (let i = 0; i < retries; i++) {
    generateMockNullFetchResponse();
  }
};

const generateMockNullFetchResponse = () => {
  const mockNullResponse = generateMockResponse(async () => null, true, 200);
  jestFetch(mockNullResponse);
};

export const mockOkRecsResponse = () =>
  jestFetch(
    generateMockResponse(async () => MOCK_FETCHED_RECOMMENDATIONS, true, 200)
  );

export const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
};
