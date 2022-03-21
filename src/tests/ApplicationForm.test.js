import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicationForm from "../pages/ApplicationForm";
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

describe("ApplicationForm Tests", () => {
  beforeEach(() => {
    render(<ApplicationForm />, { wrapper: AllTheProviders });
  });

  test("Render Header", () => {
    const header = screen.getByText("Başvuru Formu");
    expect(header).toBeInTheDocument();
  });

  test("Render Ad Label", () => {
    const adLabel = screen.getByText("Ad");
    expect(adLabel).toBeInTheDocument();
  });

  test("Render Soyad Label", () => {
    const soyadLabel = screen.getByText("Soyad");
    expect(soyadLabel).toBeInTheDocument();
  });

  test("Render Yaş Label", () => {
    const yasLabel = screen.getByText("Yaş");
    expect(yasLabel).toBeInTheDocument();
  });

  test("Render tcNo Label", () => {
    const tcNoLabel = screen.getByText("T.C. Kimlik No");
    expect(tcNoLabel).toBeInTheDocument();
  });

  test("Render Başvuru Nedeni Label", () => {
    const basvuruNedeniLabel = screen.getByText("Başvuru Nedeni");
    expect(basvuruNedeniLabel).toBeInTheDocument();
  });

  test("Render Adres Label", () => {
    const adresLabel = screen.getByText("Adres");
    expect(adresLabel).toBeInTheDocument();
  });

  test("Render Fotograf Label", () => {
    const fotoLabel = screen.getByText("Fotoğraf");
    expect(fotoLabel).toBeInTheDocument();
  });

  test("Ad input type is text", () => {
    const adInput = screen.getByPlaceholderText("Ad");
    expect(adInput.type).toEqual("text");
  });

  test("Soyad input type is text", () => {
    const soyadInput = screen.getByPlaceholderText("Soyad");
    expect(soyadInput.type).toEqual("text");
  });

  test("Yaş input type is text", () => {
    const yasInput = screen.getByPlaceholderText("Yaş");
    expect(yasInput.type).toEqual("text");
  });

  test("tcNo input type is text", () => {
    const tcNoInput = screen.getByPlaceholderText("T.C. Kimlik No");
    expect(tcNoInput.type).toEqual("text");
  });

  test("Başvuru Nedeni input type is text", () => {
    const basvuruNedeniInput = screen.getByPlaceholderText("Başvuru Nedeni");
    expect(basvuruNedeniInput.type).toEqual("text");
  });

  test("Gönder button type is submit", () => {
    const button = screen.getByText("Gönder");
    expect(button.type).toEqual("submit");
  });
});

test("ApplicationForm renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ApplicationForm />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
