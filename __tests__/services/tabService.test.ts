import tabService from "@/services/tabService";

import { mockTabs } from "@tests/__mocks__/tabs.mock";

const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

describe("tabService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call fetch with the correct endpoint", async () => {
    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: () => mockTabs,
    } as unknown as Response);

    await tabService.getAll();

    expect(mockedFetch).toHaveBeenCalledWith("/react-tabs-project");
  });

  it("should return the parsed Tab array on a successful response", async () => {
    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: () => mockTabs,
    } as unknown as Response);

    const result = await tabService.getAll();

    expect(result).toEqual(mockTabs);
  });

  it("should throw an error when the response is not ok", async () => {
    mockedFetch.mockResolvedValueOnce({ ok: false, status: 500 } as unknown as Response);

    await expect(tabService.getAll()).rejects.toThrow("HTTP error! status: 500");
  });

  it("should throw an error with the correct status code", async () => {
    mockedFetch.mockResolvedValueOnce({ ok: false, status: 404 } as unknown as Response);

    await expect(tabService.getAll()).rejects.toThrow("HTTP error! status: 404");
  });
});
