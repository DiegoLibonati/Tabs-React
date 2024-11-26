import { screen, render } from "@testing-library/react";

import { DutieItem } from "./DutieItem";

type RenderComponent = {
  props: {
    dutie: string;
  };
  container: HTMLElement;
};

const renderComponent = (): RenderComponent => {
  const props = {
    dutie: "dutie1",
  };

  const { container } = render(<DutieItem dutie={props.dutie} />);

  return {
    container: container,
    props: props,
  };
};

test("It must render a list item with its respective value passed through props.", () => {
  const { props } = renderComponent();

  const item = screen.getByRole("listitem");

  expect(item).toBeInTheDocument();
  expect(item).toHaveClass("exp_container_info_duties_dutie");
  expect(item).toHaveTextContent(props.dutie);
});
