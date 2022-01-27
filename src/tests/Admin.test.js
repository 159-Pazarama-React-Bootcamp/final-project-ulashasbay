import React from "react";
import { render, screen } from "@testing-library/react";
import Admin from "../pages/Admin";
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

describe("Admin Tests", () => {
  let usernameInput, passwordInput, button;
  beforeEach(() => {
    render(<Admin />, { wrapper: AllTheProviders });
    usernameInput = screen.getByPlaceholderText("Kullanıcı Adı");
    passwordInput = screen.getByPlaceholderText("Şifre");
    button = screen.getByText("Giriş");
  });

  test("Render Header", () => {
    const header = screen.getByText("Giriş Yap");
    expect(header).toBeInTheDocument();
  });

  test("Render form labels", () => {
    const usernameLabel = screen.getByText("Kullanıcı Adı");
    expect(usernameLabel).toBeInTheDocument();

    const passwordLabel = screen.getByText("Şifre");
    expect(passwordLabel).toBeInTheDocument();
  });

  test("Render Inputs", () => {
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("Kullanıcı Adı input type is text", () => {
    expect(usernameInput.type).toEqual("text");
  });

  test("password input type is password", () => {
    expect(passwordInput.type).toEqual("password");
  });

  test("Render Giriş Button", () => {
    expect(button).toBeInTheDocument();
  });

  test("Giriş button type is submit", () => {
    expect(button.type).toEqual("submit");
  });
});

test("Admin renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Admin />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
