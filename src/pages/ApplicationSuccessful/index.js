import React from "react";
import AppInfoField from "../../components/AppInfoField";
import "./index.css";

function ApplicationSuccessful() {
  return (
    <div className="app-success-container">
      <span className="success-message">
        Başvurunuz başarıyla gerçekleşmiştir. Başvuru sürecinizi aşağıda size
        verilen başvuru numarası ile takip edebilirsiniz.
      </span>
      <h1>Başvuru Bilgileri</h1>
      <div className="app-success-status">
        <AppInfoField />
      </div>
    </div>
  );
}

export default ApplicationSuccessful;
