import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicationQuery from "../pages/ApplicationQuery";
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

describe("ApplicationQuery Tests", () => {
  let basvuruNoInput, button;
  beforeEach(() => {
    render(<ApplicationQuery />, { wrapper: AllTheProviders });
    basvuruNoInput = screen.getByPlaceholderText("Başvuru No");
    button = screen.getByRole("button");
  });

  test("Render Input", () => {
    expect(basvuruNoInput).toBeInTheDocument();
  });

  test("Başvuru No input type is text", () => {
    expect(basvuruNoInput.type).toEqual("text");
  });

  test("Render form label", () => {
    const basvuruNoLabel = screen.getByText("Başvuru Numarası");
    expect(basvuruNoLabel).toBeInTheDocument();
  });

  test("Render Başvuru Sorgula Button", () => {
    expect(button).toBeInTheDocument();
  });

  test("Başvuru Sorgula button type is submit", () => {
    expect(button.type).toEqual("submit");
  });
});

test("ApplicationQuery renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ApplicationQuery />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
