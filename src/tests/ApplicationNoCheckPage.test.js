import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicationNoCheckPage from "../pages/ApplicationNoCheckPage";
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

describe("ApplicationNoCheckPage Tests", () => {
  let basvuruNoInput, button;
  beforeEach(() => {
    render(<ApplicationNoCheckPage />, { wrapper: AllTheProviders });
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
