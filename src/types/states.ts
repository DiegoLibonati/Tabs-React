import { Job } from "@src/entities/app";

export type JobState = {
  jobs: Job[];
  activeJob: Job | null;
  loading: boolean;
};
