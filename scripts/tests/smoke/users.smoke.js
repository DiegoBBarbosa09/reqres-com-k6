import http from "k6/http";
import { check } from "k6";
import { postUsuarios } from "../../payload.js";
import { getHeaders, getRandomName, getRandomJobs } from "../../utils.js";

export const options = {
  vus: 1,
  duration: "2s",
  thresholds: {
    // http errors should be less than 1%
    http_req_failed: ["rate<0.01"],
    // 90% of requests should be below 600ms
    http_req_duration: ["p(90)<1000"],
    // 95% of requests tagged as static content should be below 200ms
    "http_req_duration{type:staticContent}": ["p(99)<250"],
  },
};

export default function () {
  const url = "https://reqres.in/api/users";
  const payload = JSON.stringify(
    postUsuarios(getRandomName(), getRandomJobs())
  );
  const headers = {
    headers: getHeaders(),
  };
  const res = http.post(url, payload, headers);

  check(res, {
    "is code 201": (r) => r.status === 201,
  });
}
