import { Job } from "@src/entities/app";

export const getTabs = async (): Promise<Job[]> => {
  try {
    const response = await fetch("/react-tabs-project");

    if (!response.ok) {
      throw new Error("Error fetching tabs.");
    }

    const data: Job[] = await response.json();

    return data;
  } catch (e) {
    throw new Error(`Error fetching tabs: ${e}.`);
  }
};
