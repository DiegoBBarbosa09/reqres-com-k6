import http from "k6/http";
import { check } from "k6";
import { postUsuarios } from "../../payload.js";
import { getHeaders, getRandomName, getRandomJobs } from "../../utils.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "index.html": htmlReport(data),
  };
}

export const options = {
  stages: [
    { duration: "2m", target: 2000 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<2000"],
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
