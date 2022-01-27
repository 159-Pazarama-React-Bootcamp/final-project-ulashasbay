import React from "react";
import { render, screen } from "@testing-library/react";
import AdminApplicationList from "../pages/AdminApplicationList";
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

describe("AdminApplicationList Tests", () => {
  beforeEach(() => {
    render(<AdminApplicationList />, { wrapper: AllTheProviders });
  });

  test("Render table", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});

test("AdminApplicationList renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <AdminApplicationList />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
