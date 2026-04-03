import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { ButtonExpProps } from "@/types/props";

import ButtonExp from "@/components/ButtonExp/ButtonExp";

type RenderComponent = {
  container: HTMLElement;
  props: ButtonExpProps;
};

const renderComponent = (overrides?: Partial<ButtonExpProps>): RenderComponent => {
  const mockHandleActiveCompany = jest.fn();

  const props: ButtonExpProps = {
    company: "TOMMY",
    isActive: false,
    handleActiveCompany: mockHandleActiveCompany,
    ...overrides,
  };

  const { container } = render(<ButtonExp {...props} />);

  return { container, props };
};

describe("ButtonExp", () => {
  it("should render an element with role tab", () => {
    renderComponent();
    expect(screen.getByRole("tab")).toBeInTheDocument();
  });

  it("should render the company name as text content", () => {
    renderComponent({ company: "BIGDROP" });
    expect(screen.getByRole("tab")).toHaveTextContent("BIGDROP");
  });

  it("should have the correct aria-label with company name", () => {
    renderComponent({ company: "TOMMY" });
    expect(screen.getByRole("tab", { name: "View TOMMY experience" })).toBeInTheDocument();
  });

  it("should have aria-selected false when not active", () => {
    renderComponent({ isActive: false });
    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "false");
  });

  it("should have aria-selected true when active", () => {
    renderComponent({ isActive: true });
    expect(screen.getByRole("tab")).toHaveAttribute("aria-selected", "true");
  });

  it("should apply the button-exp class", () => {
    renderComponent();
    expect(screen.getByRole("tab")).toHaveClass("button-exp");
  });

  it("should apply button-exp--active class when isActive is true", () => {
    renderComponent({ isActive: true });
    expect(screen.getByRole("tab")).toHaveClass("button-exp--active");
  });

  it("should not apply button-exp--active class when isActive is false", () => {
    renderComponent({ isActive: false });
    expect(screen.getByRole("tab")).not.toHaveClass("button-exp--active");
  });

  it("should call handleActiveCompany when clicked", async () => {
    const mockHandleActiveCompany = jest.fn();
    const user = userEvent.setup();

    renderComponent({ handleActiveCompany: mockHandleActiveCompany });

    await user.click(screen.getByRole("tab"));

    expect(mockHandleActiveCompany).toHaveBeenCalledTimes(1);
  });

  it("should not call handleActiveCompany when not clicked", () => {
    const mockHandleActiveCompany = jest.fn();
    renderComponent({ handleActiveCompany: mockHandleActiveCompany });
    expect(mockHandleActiveCompany).not.toHaveBeenCalled();
  });
});
