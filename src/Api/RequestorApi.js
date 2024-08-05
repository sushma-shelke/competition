import wretch from "wretch";

import { DeleteCookie,
  //  FilterQueryParams
   } from "./Helpers";
// import Response from "./Response";

class RequestDefaults {
  static token = "";
  // static baseUrl = "http://localhost:8080";
  static baseUrl = "https://mumbailocal.org:8080";
  // http://mumbailocal.org:8080/getproduct

  static version = "/v1";
  static changeToken(t) {
    RequestDefaults.token = t;
  }

  static changeBaseUrl(bu) {
    RequestDefaults.baseUrl = bu;
  }
}

//set base Url

const intercept401 = (path, err) => {
  const ignoredPaths = ["/public/"];
  const canIgnore = ignoredPaths.some((x) => path.indexOf(x) > -1);

  if (!canIgnore) {
    let subDomainItems = window.location.hostname.split(".");
    subDomainItems.shift();
    const subdomain = subDomainItems.join(".");

    DeleteCookie(`csat-${process.env.REACT_APP_CS_ENV}`, subdomain);
    window.location.reload();
  } else throw err;
};
const parseError = (errText) => {
  try {
    let err = JSON.parse(errText);
    return (err && err.error) || err || [];
  } catch (e) {
    return [];
  }
};

export const Get = async (path, json, queryParams) => {
  let response = {};

  const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
    .get(json)
    .unauthorized((err) => intercept401(path, err));

  try {
    response.result = await request.json();
  } catch (e) {
    response.err = parseError(e.text);
    response.status = e.status;
  }

  return response;
};

export const Post = async (path, json, queryParams) => {
  let response = {};
  const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
    .post(json)
    .unauthorized((err) => intercept401(path, err));
  try {
    response.result = await request.json();
  } catch (e) {
    response.err = parseError(e.text);
    response.status = e.status;
  }
  return response;
};

export const Login = async (path, json) => {
  let response = {};
  const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
    // .query(params)
    .post(json)
    .unauthorized((err) => intercept401(path, err));

  try {
    response.result = await request.json();
  } catch (e) {
    response.err = parseError("e.text");
    response.status = e.status;
  }
  return response;
};

// const Patch = async (path, json, queryParams) => {
//   let response = {};
//   const request = await wretch(`${RequestDefaults.baseUrl}${path}`)
//     .query(queryParams)
//     .patch(json)
//     .unauthorized((err) => intercept401(path, err));
//   try {
//     response.result = await request.json();
//   } catch (e) {
//     response.err = parseError(e.text);
//     response.status = e.status;
//   }
//   return response;
// };
