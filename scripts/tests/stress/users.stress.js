import http from "k6/http";
import { check } from "k6";
import { postUsuarios } from "../../payload.js";
import { getHeaders, getRandomName, getRandomJobs } from "../../utils.js";

export const options = {
  stages: [
    { duration: "2m", target: 100 },
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 },
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 },
    { duration: "5m", target: 300 },
    { duration: "10m", target: 0 },
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
