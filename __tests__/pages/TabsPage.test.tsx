import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TabsPage from "@/pages/TabsPage/TabsPage";

import tabService from "@/services/tabService";

import { mockTabs, mockTab } from "@tests/__mocks__/tabs.mock";

interface RenderPage {
  container: HTMLElement;
}

jest.mock("@/services/tabService");

const mockedTabService = tabService as jest.Mocked<typeof tabService>;

const renderPage = (): RenderPage => {
  const { container } = render(<TabsPage />);
  return { container };
};

describe("TabsPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the loading spinner while fetching", () => {
    mockedTabService.getAll.mockReturnValueOnce(new Promise(() => undefined));

    renderPage();

    expect(screen.getByRole("status", { name: "Loading" })).toBeInTheDocument();
  });

  it("should render the main element after fetch completes", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);

    const { container } = renderPage();

    await screen.findByRole("main", { name: "Work experience" });
    expect(container.querySelector<HTMLElement>("main.main-app")).toBeInTheDocument();
  });

  it("should render the tablist with the correct aria-label", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);

    renderPage();

    await screen.findByRole("tablist", { name: "Work experience companies" });
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("should render a tab button for each job", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);

    renderPage();

    const tabs = await screen.findAllByRole("tab");
    expect(tabs).toHaveLength(mockTabs.length);
  });

  it("should select the first job as active by default", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);

    renderPage();

    const tabs = await screen.findAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
  });

  it("should display the first job details in the tabpanel by default", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);

    renderPage();

    const tabpanel = await screen.findByRole("tabpanel");
    expect(within(tabpanel).getByRole("heading", { level: 2 })).toHaveTextContent(mockTab.title);
  });

  it("should mark only the clicked tab as active", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);
    const user = userEvent.setup();

    renderPage();

    const tabs = await screen.findAllByRole("tab");
    await user.click(tabs[1]!);

    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  });

  it("should update the tabpanel content when a tab is clicked", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);
    const user = userEvent.setup();

    renderPage();

    const tabs = await screen.findAllByRole("tab");
    await user.click(tabs[1]!);

    const tabpanel = screen.getByRole("tabpanel");
    expect(within(tabpanel).getByRole("heading", { level: 2 })).toHaveTextContent(
      mockTabs[1]!.title
    );
  });

  it("should call tabService.getAll exactly once on mount", async () => {
    mockedTabService.getAll.mockResolvedValueOnce(mockTabs);

    renderPage();

    await screen.findAllByRole("tab");
    expect(mockedTabService.getAll).toHaveBeenCalledTimes(1);
  });
});
