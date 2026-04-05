import { render, screen } from "@testing-library/react";

import type { CompanyExpProps } from "@/types/props";

import CompanyExp from "@/components/CompanyExp/CompanyExp";

import { mockTab } from "@tests/__mocks__/tabs.mock";

interface RenderComponent {
  container: HTMLElement;
  props: CompanyExpProps;
}

const renderComponent = (overrides?: Partial<CompanyExpProps>): RenderComponent => {
  const props: CompanyExpProps = {
    company: mockTab.company,
    title: mockTab.title,
    dates: mockTab.dates,
    duties: mockTab.duties,
    ...overrides,
  };

  const { container } = render(<CompanyExp {...props} />);

  return { container, props };
};

describe("CompanyExp", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with role tabpanel", () => {
    renderComponent();
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
  });

  it("should have an aria-label containing the company name", () => {
    renderComponent({ company: "TOMMY" });
    expect(screen.getByRole("tabpanel", { name: /TOMMY/i })).toBeInTheDocument();
  });

  it("should render the job title in an h2", () => {
    renderComponent({ title: "Full Stack Web Developer" });
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Full Stack Web Developer");
  });

  it("should render the company name in an h3", () => {
    renderComponent({ company: "TOMMY" });
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("TOMMY");
  });

  it("should render the dates in an h4", () => {
    renderComponent({ dates: "December 2015 - Present" });
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("December 2015 - Present");
  });

  it("should render a list item for each duty", () => {
    renderComponent({ duties: mockTab.duties });
    expect(screen.getAllByRole("listitem")).toHaveLength(mockTab.duties.length);
  });

  it("should render the duties list with an aria-label containing the company name", () => {
    renderComponent({ company: "TOMMY" });
    expect(screen.getByRole("list", { name: /TOMMY/i })).toBeInTheDocument();
  });

  it("should render no list items when duties is empty", () => {
    renderComponent({ duties: [] });
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
