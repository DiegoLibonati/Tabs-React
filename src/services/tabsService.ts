import type { Tab } from "@/types/app";

export const tabsService = {
  getAll: async (): Promise<Tab[]> => {
    const response = await fetch("/react-tabs-project");

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const tabs: Tab[] = (await response.json()) as Tab[];

    return tabs;
  },
};
