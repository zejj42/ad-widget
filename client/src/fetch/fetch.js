import { SERVER_BASE_URL, SERVER_CONFIG_URL } from "../../config/config.js";
import {
  INCORRECT_NETWORK_RESPONSE,
  NO_FETCH_DATA_RECEIVED,
} from "../constants/errors.js";

export const fetchServerConfig = async () =>
  await handleFetch(SERVER_CONFIG_URL);

const fetchRecommendationsConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const getUrlParams = (apiInstance) => {
  const { appType, apiKey, count } = apiInstance;
  return {
    "app.type": appType,
    "app.apikey": apiKey,
    count: count,
    "source.type": "video",
    "source.id": "demo",
  };
};

export const getFetchRecommendationsEndpoint = (apiInstance, publisherId) => {
  const baseUrl = apiInstance.baseUrl;
  const params = new URLSearchParams(getUrlParams(apiInstance));
  return `${SERVER_BASE_URL}/api/${publisherId}/${baseUrl}?${params}`;
};

const handleFetch = async (url, config) => {
  const response = await fetch(url, config);
  if (!response) {
    throw new Error(NO_FETCH_DATA_RECEIVED);
  }
  if (!response.ok) {
    throw new Error(
      `${INCORRECT_NETWORK_RESPONSE}. Status: ${response.status}`
    );
  }
  return response.json();
};

const fetchSingleAttempt = async (apiInstance, publisherId) => {
  const endPoint = getFetchRecommendationsEndpoint(apiInstance, publisherId);
  const data = await handleFetch(endPoint, fetchRecommendationsConfig);
  return data?.[apiInstance.listProperty];
};

const validateOrReturnFetchData = (data) => {
  if (!data || data?.length === 0) {
    throw new Error(NO_FETCH_DATA_RECEIVED);
  }
  return data;
};

const handleFetchError = (error, attempt, maxAttempts) => {
  if (attempt === maxAttempts - 1) {
    throw error;
  }
};
export const fetchRecommendations = async (apiInstance, publisherInstance) => {
  const { publisherId, retries } = publisherInstance;
  for (let i = 0; i < retries; i++) {
    try {
      const data = await fetchSingleAttempt(apiInstance, publisherId);
      return validateOrReturnFetchData(data);
    } catch (error) {
      handleFetchError(error, i, retries);
    }
  }
};
