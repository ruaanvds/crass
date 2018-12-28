import { createRequestTypes, REQUEST, SUCCESS, FAILURE } from "./";

export const GENERAL = createRequestTypes("GENERAL");

const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const user = {
  request: login => action(GENERAL[REQUEST], { login }),
  success: (login, response) => action(GENERAL[SUCCESS], { login, response }),
  failure: (login, error) => action(GENERAL[FAILURE], { login, error })
};

export const loadGeneral = user.request;
