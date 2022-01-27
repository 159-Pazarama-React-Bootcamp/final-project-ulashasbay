import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import renderer from "react-test-renderer";

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

describe("HomePage Tests", () => {
  beforeEach(() => {
    render(<Home />, { wrapper: AllTheProviders });
  });

  test("Render image", () => {
    const homeImg = screen.getByAltText("HomeImg");
    expect(homeImg).toBeInTheDocument();
  });

  test("Render button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

test("Home renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
