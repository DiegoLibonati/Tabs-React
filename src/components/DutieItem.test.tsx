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

describe("DutieItem.tsx", () => {
  describe("General Tests.", () => {
    test("It must render a list item with its respective value passed through props.", () => {
      const { props } = renderComponent();

      const item = screen.getByRole("listitem");

      expect(item).toBeInTheDocument();
      expect(item).toHaveClass("experience__information__duties__dutie");
      expect(item).toHaveTextContent(props.dutie);
    });
  });
});
