import React from "react";
import Input from "../../components/Input";
import "./index.css";

function ApplicationPage() {
  return (
    <div className="admin-login-container">
      <h1>Başvuru Formu</h1>
      <form className="application-form">
        <Input name="ad" type="text" text="Ad" placeholder="Ad" />
        <Input name="soyad" type="text" text="Soyad" placeholder="Soyad" />
        <Input name="yas" type="text" text="Yaş" placeholder="Yaş" />
        <Input
          name="tcno"
          type="text"
          text="TC Kimlik No"
          placeholder="TC Kimlik No"
        />
        <Input
          name="basvurunedeni"
          type="text"
          text="Başvuru Nedeni"
          placeholder="Başvuru Nedeni"
        />
        <div className="row">
          <label htmlFor="adres">Adres</label>
          <textarea name="adres" placeholder="Adres" />
        </div>
        <Input
          name="fotograf"
          type="file"
          text="Fotoğraf"
          placeholder="Fotoğraf"
        />

        <button className="login-button" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
}

export default ApplicationPage;
