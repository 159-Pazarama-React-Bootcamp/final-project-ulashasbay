import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotFoundPage from "../pages/NotFoundPage";
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

describe("NotFoundPage Tests", () => {
  beforeEach(() => {
    render(<NotFoundPage />, { wrapper: AllTheProviders });
  });

  test("Render header", () => {
    const header = screen.getByText("404");
    expect(header).toBeInTheDocument();
  });

  test("Click home button redirect to HomePage", () => {
    const button = screen.getByText("Go Home");
    userEvent.click(button);
    expect(location.pathname).toEqual("/");
  });
});

test("NotFoundPage renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
