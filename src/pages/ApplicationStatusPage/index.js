import React from "react";
import Input from "../../components/Input";
import "./index.css"

function ApplicationStatusPage() {
  return (
    <div className="admin-login-container">
      <h1>Başvuru Sorgula</h1>
      <form className="application-status-form">
        <Input
          name="basvurusorgula"
          type="text"
          text="Başvuru Numarası"
          placeholder="Başvuru No"
        />
        <button className="login-button" type="submit">
          Başvuru Sorgula
        </button>
      </form>
    </div>
  );
}

export default ApplicationStatusPage;
