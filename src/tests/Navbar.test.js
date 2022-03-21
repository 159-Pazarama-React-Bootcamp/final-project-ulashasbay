import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

describe("Navbar Test", () => {
  let anasayfaLink, basvuruYapLink, basvuruListesiLink, basvuruSorgulaLink;
  beforeEach(() => {
    render(<Navbar />, { wrapper: AllTheProviders });
    anasayfaLink = screen.getByText("Anasayfa");
    basvuruYapLink = screen.getByText("Başvuru Yap");
    basvuruListesiLink = screen.getByText("Başvuru Listesi");
    basvuruSorgulaLink = screen.getByText("Başvuru Sorgula");
  });

  test("Render Navbar Menu items", () => {
    expect(anasayfaLink).toBeInTheDocument();
    expect(basvuruYapLink).toBeInTheDocument();
    expect(basvuruListesiLink).toBeInTheDocument();
    expect(basvuruSorgulaLink).toBeInTheDocument();
  });

  test("Render Navbar Buttons", () => {
    const btns = screen.getByRole("button");
    expect(btns).toBeInTheDocument();
  });

  test("Clicking Anasayfa should redirect", () => {
    const history = createMemoryHistory();
    userEvent.click(anasayfaLink);
    expect(history.location.pathname).toEqual("/");
  });

  test("Clicking Başvuru Yap should redirect to /basvuru-olustur", () => {
    userEvent.click(basvuruYapLink);
    expect(location.pathname).toEqual("/basvuru-olustur");
  });

  test("Clicking Başvuru Listesi should redirect to /admin/basvuru-listesi", () => {
    userEvent.click(basvuruListesiLink);
    expect(location.pathname).toEqual("/admin/basvuru-listesi");
  });

  test("Clicking Başvuru Sorgula should redirect to /basvuru-sorgula", () => {
    userEvent.click(basvuruSorgulaLink);
    expect(location.pathname).toEqual("/basvuru-sorgula");
  });
});

test("Navbar renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
