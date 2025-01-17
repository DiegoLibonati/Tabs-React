import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Main } from "./Main";

import { createServer } from "../tests/msw/server";
import { TabsTests } from "../tests/jest.constants";

type RenderComponent = {
  container: HTMLElement;
};

const renderComponent = (): RenderComponent => {
  const { container } = render(<Main />);

  return {
    container: container,
  };
};

const asyncRenderComponent = async (): Promise<RenderComponent> => {
  const { container } = render(<Main />);

  await screen.findAllByRole("button", { name: /select company/i });

  return {
    container: container,
  };
};

describe("Main.tsx", () => {
  describe("General Tests.", () => {
    createServer([
      {
        path: "/react-tabs-project",
        method: "get",
        res: () => {
          return TabsTests;
        },
      },
    ]);

    test("It should render a spinner when fetching tabs.", () => {
      const { container } = renderComponent();

      const main = screen.getByRole("main");
      // eslint-disable-next-line
      const spinner = container.querySelector(".spinner");

      expect(main).toBeInTheDocument();
      expect(main).toHaveClass("main__spinner");
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass("spinner");
    });

    test("It must render the title of the APP, the totality of the buttons.", async () => {
      await asyncRenderComponent();

      const main = screen.getByRole("main");
      const titleApp = screen.getByRole("heading", { name: /expierence/i });
      const buttons = screen.getAllByRole("button", {
        name: /select company/i,
      });

      expect(main).toBeInTheDocument();
      expect(main).toHaveClass("main");
      expect(titleApp).toBeInTheDocument();
      expect(buttons).toHaveLength(TabsTests.length);
    });

    test("It should be only one experience__btn--active button.", async () => {
      await asyncRenderComponent();

      const buttons = screen.getAllByRole("button", {
        name: /select company/i,
      });

      const activeButton = buttons.filter((button) =>
        button.classList.contains("experience__btn--active")
      );

      expect(activeButton).toHaveLength(1);
    });

    test("It must change the experience__btn--active company when you click on a button other than the experience__btn--active one.", async () => {
      await asyncRenderComponent();

      const buttons = screen.getAllByRole("button", {
        name: /select company/i,
      });

      const activeButton = buttons.find((button) =>
        button.classList.contains("experience__btn--active")
      );

      const notActiveButton = buttons.find(
        (button) => !button.classList.contains("experience__btn--active")
      );

      expect(activeButton).toBeInTheDocument();
      expect(notActiveButton).toBeInTheDocument();
      expect(activeButton).toHaveClass("experience__btn--active");
      expect(notActiveButton).not.toHaveClass("experience__btn--active");

      await user.click(notActiveButton!);

      expect(activeButton).toBeInTheDocument();
      expect(notActiveButton).toBeInTheDocument();
      expect(activeButton).not.toHaveClass("experience__btn--active");
      expect(notActiveButton).toHaveClass("experience__btn--active");
    });

    test("It must render the experience__btn--active tab based on the current company.", async () => {
      await asyncRenderComponent();

      const buttons = screen.getAllByRole("button", {
        name: /select company/i,
      });

      const activeButton = buttons.find((button) =>
        button.classList.contains("experience__btn--active")
      );

      expect(activeButton).toBeInTheDocument();

      const textContentButton = activeButton?.textContent;

      const company = TabsTests.find(
        (tab) => tab.company.toLowerCase() === textContentButton?.toLowerCase()
      );

      const title = screen.getByRole("heading", {
        name: company?.title,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
