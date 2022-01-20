import React from "react";
import { useApp } from "../../context/appContext";
import "./index.css";

function AdminViewUserPage() {
  const { appId, userInfo } = useApp();
  return (
    <div>
      <div className="admin-login-container">
        <h1>Kullanıcı Başvuru Bilgileri</h1>
        <div className="show-application-status">
          <div className="row-app-show-page">Başvuru No: {appId}</div>
          <div className="row-app-show-page">Ad: {userInfo.ad}</div>
          <div className="row-app-show-page">Yaş: {userInfo.yas}</div>
          <div className="row-app-show-page">T.C Kimlik No: {userInfo.tcNo}</div>
          <div className="row-app-show-page">Başvuru Nedeni: {userInfo.basvuruNedeni}</div>
          <div className="row-app-show-page">Adres: {userInfo.adres} </div>
          <div className="row-app-show-page">Başvuru Sonucu: {userInfo.basvuruSonuc}</div>
          <button className="accept-button">Onayla</button>
          <button className="reject-button">Reddet</button>
        </div>
      </div>
    </div>
  );
}

export default AdminViewUserPage;
