import { screen, render } from "@testing-library/react";

import { CompanyExp } from "./CompanyExp";

type RenderComponent = {
  props: {
    company: string;
    title: string;
    dates: string;
    duties: string[];
  };
  container: HTMLElement;
};

const renderComponent = (): RenderComponent => {
  const props = {
    company: "exp123",
    title: "title123",
    dates: "dates123",
    duties: ["duti1", "duti2", "duti3"],
  };

  const { container } = render(
    <CompanyExp
      company={props.company}
      title={props.title}
      dates={props.dates}
      duties={props.duties}
    />
  );

  return {
    container: container,
    props: props,
  };
};

test("It should render the article container, with its title, company, dates and list of duties.", () => {
  const { props } = renderComponent();

  const article = screen.getByRole("article");
  const company = screen.getByRole("heading", { name: props.company });
  const title = screen.getByRole("heading", { name: props.title });
  const dates = screen.getByRole("heading", { name: props.dates });
  const listDuties = screen.getByRole("list");

  expect(article).toBeInTheDocument();
  expect(article).toHaveClass("exp_container_info");
  expect(company).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(dates).toBeInTheDocument();
  expect(listDuties).toBeInTheDocument();
  expect(listDuties).toHaveClass("exp_container_info_duties");
});

test("It must render the totality of duties.", () => {
  const { props } = renderComponent();

  const listItems = screen.getAllByRole("listitem");

  expect(listItems).toHaveLength(props.duties.length);
});
