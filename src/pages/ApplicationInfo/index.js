import React from "react";
import AppInfoField from "../../components/AppInfoField";
import "./index.css";

function ApplicationInfo() {
  return (
    <div className="app-info-container">
      <h1>Başvuru Bilgileri</h1>
      <div className="app-info-status">
        <AppInfoField />
      </div>
    </div>
  );
}

export default ApplicationInfo;
