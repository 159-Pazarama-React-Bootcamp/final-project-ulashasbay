import React from "react";
import { Formik } from "formik";
import Input from "../../components/Input";
import "./index.css";

function ApplicationPage() {
  return (
    <div className="admin-login-container">
      <h1>Başvuru Formu</h1>
      <Formik
        initialValues={{
          ad: "",
          soyad: "",
          yas: "",
          tcNo: "",
          basvuruNedeni: "",
          adres: "",
          fotograf: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form className="application-form" onSubmit={handleSubmit}>
            <Input
              name="ad"
              type="text"
              text="Ad"
              placeholder="Ad"
              onChange={handleChange}
            />
            <Input
              name="soyad"
              type="text"
              text="Soyad"
              placeholder="Soyad"
              onChange={handleChange}
            />
            <Input
              name="yas"
              type="text"
              text="Yaş"
              placeholder="Yaş"
              onChange={handleChange}
            />
            <Input
              name="tcNo"
              type="text"
              text="TC Kimlik No"
              placeholder="TC Kimlik No"
              onChange={handleChange}
            />
            <Input
              name="basvuruNedeni"
              type="text"
              text="Başvuru Nedeni"
              placeholder="Başvuru Nedeni"
              onChange={handleChange}
            />
            <div className="row">
              <label htmlFor="adres">Adres</label>
              <textarea
                name="adres"
                placeholder="Adres"
                onChange={handleChange}
              />
            </div>
            <Input
              name="fotograf"
              type="file"
              text="Fotoğraf"
              placeholder="Fotoğraf"
              onChange={handleChange}
            />
            <button className="login-button" type="submit">
              Gönder
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ApplicationPage;
