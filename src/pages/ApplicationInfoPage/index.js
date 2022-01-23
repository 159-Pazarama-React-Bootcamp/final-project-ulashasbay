import React from "react";
import AppInfoArea from "../../components/AppInfoArea";
import Navbar from "../../components/Navbar";
import "./index.css";

function ApplicationInfoPage() {
  return (
    <div>
      <Navbar />
      <div className="app-info-container">
        <h1>Başvuru Bilgileri</h1>
        <div className="app-info-status">
          <AppInfoArea />
        </div>
      </div>
    </div>
  );
}

export default ApplicationInfoPage;
