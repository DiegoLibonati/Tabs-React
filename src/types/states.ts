import type { Tab } from "@/types/app";

export interface JobState {
  jobs: Tab[];
  activeJob: Tab | null;
  loading: boolean;
}
