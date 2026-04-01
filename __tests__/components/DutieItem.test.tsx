import { render, screen } from "@testing-library/react";

import type { DutieItemProps } from "@/types/props";

import DutieItem from "@/components/DutieItem/DutieItem";

type RenderComponent = {
  container: HTMLElement;
  props: DutieItemProps;
};

const renderComponent = (overrides?: Partial<DutieItemProps>): RenderComponent => {
  const props: DutieItemProps = {
    dutie: "Built a React application",
    ...overrides,
  };

  const { container } = render(
    <ul>
      <DutieItem {...props} />
    </ul>
  );

  return { container, props };
};

describe("DutieItem", () => {
  it("should render a list item", () => {
    renderComponent();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("should render the dutie text", () => {
    renderComponent({ dutie: "Built a React application" });
    expect(screen.getByRole("listitem")).toHaveTextContent("Built a React application");
  });

  it("should apply the dutie-item class to the list item", () => {
    renderComponent();
    expect(screen.getByRole("listitem")).toHaveClass("dutie-item");
  });

  it("should render the icon with aria-hidden true", () => {
    const { container } = renderComponent();
    const icon = container.querySelector<SVGElement>("svg");
    expect(icon).toHaveAttribute("aria-hidden", "true");
  });
});
