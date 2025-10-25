import { GetTabsResponse } from "@src/entities/responses";

export const getTabs = async (): Promise<GetTabsResponse> => {
  try {
    const response = await fetch("/react-tabs-project");

    if (!response.ok) {
      throw new Error("Error fetching tabs.");
    }

    const data: GetTabsResponse = await response.json();

    return data;
  } catch (e) {
    throw new Error(`Error fetching tabs: ${e}.`);
  }
};
