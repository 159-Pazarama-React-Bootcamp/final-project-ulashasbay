import React from "react";
import { useSelector } from "react-redux";

function AppInfoField() {
  const appIdValue = useSelector((state) => state.appId.value);
  const userInfoValue = useSelector((state) => state.userInfo.value);

  return (
    <>
      {!(userInfoValue.fotograf === "") && (
        <img
          className="app-info-area-img"
          width="100px"
          style={{ marginLeft: "36%", border: "solid 1px" }}
          src={userInfoValue.fotograf}
          alt="img"
        />
      )}
      <div className="row-app-show-page">
        <b>Başvuru No:</b>
        {appIdValue}
      </div>
      <div className="row-app-show-page">
        <b>Ad:</b>
        {userInfoValue.ad}
      </div>
      <div className="row-app-show-page">
        <b>Soyad:</b>
        {userInfoValue.soyad}
      </div>
      <div className="row-app-show-page">
        <b>Yaş:</b>
        {userInfoValue.yas}
      </div>
      <div className="row-app-show-page">
        <b>T.C Kimlik No:</b>
        {userInfoValue.tcNo}
      </div>
      <div className="row-app-show-page">
        <b>Başvuru Nedeni:</b>
        {userInfoValue.basvuruNedeni}
      </div>
      <div className="row-app-show-page">
        <b>Adres:</b>
        {userInfoValue.adres}
      </div>
      <div className="row-app-show-page">
        <b>Başvuru Sonucu:</b>
        {userInfoValue.basvuruSonuc}
      </div>
    </>
  );
}

export default AppInfoField;
