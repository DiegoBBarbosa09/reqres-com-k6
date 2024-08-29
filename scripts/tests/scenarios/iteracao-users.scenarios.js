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
  scenarios: {
    shared_iter_scenario: {
      executor: "shared-iterations",
      vus: 10,
      iterations: 100,
      startTime: "0s",
    },
    per_vu_scenario: {
      executor: "per-vu-iterations",
      vus: 10,
      iterations: 10,
      startTime: "10s",
    },
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
