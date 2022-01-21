import React from "react";
import { useApp } from "../../context/appContext";

function AppInfoArea() {
    const { appId, appInfo } = useApp();
  return (
    <>
      <div className="row-app-show-page">Başvuru No: {appId}</div>
      <div className="row-app-show-page">Ad: {appInfo.ad}</div>
      <div className="row-app-show-page">Yaş: {appInfo.yas}</div>
      <div className="row-app-show-page">T.C Kimlik No: {appInfo.tcNo}</div>
      <div className="row-app-show-page">
        Başvuru Nedeni: {appInfo.basvuruNedeni}
      </div>
      <div className="row-app-show-page">Adres: {appInfo.adres} </div>
      <div className="row-app-show-page">
        Başvuru Sonucu: {appInfo.basvuruSonuc}
      </div>
    </>
  );
}

export default AppInfoArea;
