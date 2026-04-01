import { tabsService } from "@/services/tabsService";

import { mockTabs } from "@tests/__mocks__/tabs.mock";

describe("tabsService", () => {
  it("should call fetch with the correct endpoint", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockTabs,
    });

    await tabsService.getAll();

    expect(global.fetch).toHaveBeenCalledWith("/react-tabs-project");
  });

  it("should return the parsed Tab array on a successful response", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockTabs,
    });

    const result = await tabsService.getAll();

    expect(result).toEqual(mockTabs);
  });

  it("should throw an error when the response is not ok", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false, status: 500 });

    await expect(tabsService.getAll()).rejects.toThrow("HTTP error! status: 500");
  });

  it("should throw an error with the correct status code", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false, status: 404 });

    await expect(tabsService.getAll()).rejects.toThrow("HTTP error! status: 404");
  });
});
