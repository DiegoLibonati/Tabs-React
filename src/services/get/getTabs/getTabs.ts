import { Job } from "../../../entities/entities";

export const getTabs = async (): Promise<Job[]> => {
  const request = await fetch("/react-tabs-project");
  const data: Job[] = await request.json();

  return data;
};
