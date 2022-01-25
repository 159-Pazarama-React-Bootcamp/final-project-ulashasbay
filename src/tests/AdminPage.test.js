import React from "react";
import { render, screen } from "@testing-library/react";
import AdminPage from "../pages/AdminPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

describe("AdminPage Tests", () => {
  beforeEach(() => {
    render(<AdminPage />, { wrapper: AllTheProviders });
  });

  test("Render table", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
