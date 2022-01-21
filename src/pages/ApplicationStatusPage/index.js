import React from "react";
import AppInfoArea from "../../components/appInfoArea";
import "./index.css";

function ApplicationStatusPage() {
  return (
    <div>
      <div className="admin-login-container">
        <h1>Başvuru Bilgileri</h1>
        <div className="show-application-status">
          <AppInfoArea />
        </div>
      </div>
    </div>
  );
}

export default ApplicationStatusPage;
