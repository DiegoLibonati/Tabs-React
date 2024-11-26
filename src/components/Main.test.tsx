import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Main } from "./Main";

import { createServer } from "../tests/msw/server";
import { TabsTests } from "../tests/constants/constants";

type RenderComponent = {
  container: HTMLElement;
};

createServer([
  {
    path: "/react-tabs-project",
    method: "get",
    res: () => {
      return TabsTests;
    },
  },
]);

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

test("It should render a spinner when fetching tabs.", () => {
  const { container } = renderComponent();

  const main = screen.getByRole("main");
  // eslint-disable-next-line
  const spinner = container.querySelector(".spinner");

  expect(main).toBeInTheDocument();
  expect(main).toHaveClass("main_container_loading");
  expect(spinner).toBeInTheDocument();
  expect(spinner).toHaveClass("spinner");
});

test("It must render the title of the APP, the totality of the buttons.", async () => {
  await asyncRenderComponent();

  const main = screen.getByRole("main");
  const titleApp = screen.getByRole("heading", { name: /expierence/i });
  const buttons = screen.getAllByRole("button", { name: /select company/i });

  expect(main).toBeInTheDocument();
  expect(main).toHaveClass("main_container");
  expect(titleApp).toBeInTheDocument();
  expect(buttons).toHaveLength(TabsTests.length);
});

test("It should be only one active button.", async () => {
  await asyncRenderComponent();

  const buttons = screen.getAllByRole("button", { name: /select company/i });

  const activeButton = buttons.filter((button) =>
    button.classList.contains("active")
  );

  expect(activeButton).toHaveLength(1);
});

test("It must change the active company when you click on a button other than the active one.", async () => {
  await asyncRenderComponent();

  const buttons = screen.getAllByRole("button", { name: /select company/i });

  const activeButton = buttons.find((button) =>
    button.classList.contains("active")
  );

  const notActiveButton = buttons.find(
    (button) => !button.classList.contains("active")
  );

  expect(activeButton).toBeInTheDocument();
  expect(notActiveButton).toBeInTheDocument();
  expect(activeButton).toHaveClass("active");
  expect(notActiveButton).not.toHaveClass("active");

  await user.click(notActiveButton!);

  expect(activeButton).toBeInTheDocument();
  expect(notActiveButton).toBeInTheDocument();
  expect(activeButton).not.toHaveClass("active");
  expect(notActiveButton).toHaveClass("active");
});

test("It must render the active tab based on the current company.", async () => {
  await asyncRenderComponent();

  const buttons = screen.getAllByRole("button", { name: /select company/i });

  const activeButton = buttons.find((button) =>
    button.classList.contains("active")
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
