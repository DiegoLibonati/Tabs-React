import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import { ButtonExp } from "./ButtonExp";

type RenderComponent = {
  props: {
    company: string;
    isActive: boolean;
    handleActiveCompany: jest.Mock;
  };
  container: HTMLElement;
};

interface RenderComponentProps {
  isActive: boolean;
}

const renderComponent = ({
  isActive,
}: RenderComponentProps): RenderComponent => {
  const props = {
    company: "exp123",
    isActive: isActive,
    handleActiveCompany: jest.fn(),
  };

  const { container } = render(
    <ButtonExp
      company={props.company}
      isActive={props.isActive}
      handleActiveCompany={props.handleActiveCompany}
    />
  );

  return {
    container: container,
    props: props,
  };
};

describe("ButtonExp.tsx", () => {
  describe("General Tests.", () => {
    test("It must render the button with the 'button-exp' class with the company entered by props.", () => {
      const { props } = renderComponent({ isActive: false });

      const button = screen.getByRole("button", {
        name: /select company/i,
      });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("button-exp");
      expect(button).not.toHaveClass("button-exp--active");
      expect(button).toHaveTextContent(props.company);
    });

    test("It must render the component without it being button-exp--active.", () => {
      renderComponent({ isActive: false });

      const button = screen.getByRole("button", {
        name: /select company/i,
      });

      expect(button).not.toHaveClass("button-exp--active");
    });

    test("It must render the component while it is button-exp--active.", () => {
      renderComponent({ isActive: true });

      const button = screen.getByRole("button", {
        name: /select company/i,
      });

      expect(button).toHaveClass("button-exp--active");
    });

    test("It must execute the function 'handleActiveCompany' when clicked.", async () => {
      const { props } = renderComponent({ isActive: false });

      const button = screen.getByRole("button", {
        name: /select company/i,
      });

      await user.click(button);

      expect(props.handleActiveCompany).toHaveBeenCalledTimes(1);
    });
  });
});
