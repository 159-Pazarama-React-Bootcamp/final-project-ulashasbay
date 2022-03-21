import React from "react";
import { render, screen } from "@testing-library/react";
import AppInfoField from "../components/AppInfoField";
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

describe("AppInfoField Test", () => {
  beforeEach(() => {
    render(<AppInfoField />, { wrapper: AllTheProviders });
  });

  test("Render AppInfoField items", () => {
    const basvuruNo = screen.getByText("Başvuru No:");
    expect(basvuruNo).toBeInTheDocument();

    const ad = screen.getByText("Ad:");
    expect(ad).toBeInTheDocument();

    const soyad = screen.getByText("Soyad:");
    expect(soyad).toBeInTheDocument();

    const yas = screen.getByText("Yaş:");
    expect(yas).toBeInTheDocument();

    const tcNo = screen.getByText("T.C. Kimlik No:");
    expect(tcNo).toBeInTheDocument();

    const basvuruNedeni = screen.getByText("Başvuru Nedeni:");
    expect(basvuruNedeni).toBeInTheDocument();

    const adres = screen.getByText("Adres:");
    expect(adres).toBeInTheDocument();

    const basvuruSonucu = screen.getByText("Başvuru Sonucu:");
    expect(basvuruSonucu).toBeInTheDocument();
  });
});

test("AppInfoField renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <AppInfoField />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
