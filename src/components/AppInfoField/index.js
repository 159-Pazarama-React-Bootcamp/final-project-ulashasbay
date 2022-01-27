import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

function AppInfoField() {
  const appIdValue = useSelector((state) => state.appId.value);
  const userInfoValue = useSelector((state) => state.userInfo.value);

  return (
    <>
      {"imageUrl" in userInfoValue && (
        <img
          className="app-info-area-img"
          width="100px"
          src={userInfoValue.imageUrl}
          alt="img"
        />
      )}
      <div className="row-app-show-page">
        <b>Başvuru No:</b>
        {appIdValue}
      </div>
      <div className="row-app-show-page">
        <b>T.C. Kimlik No:</b>
        {userInfoValue.tcNo}
      </div>
      <div className="row-app-show-page">
        <b>Ad:</b>
        {userInfoValue.name}
      </div>
      <div className="row-app-show-page">
        <b>Soyad:</b>
        {userInfoValue.surname}
      </div>
      <div className="row-app-show-page">
        <b>Yaş:</b>
        {userInfoValue.age}
      </div>
      <div className="row-app-show-page">
        <b>Adres:</b>
        {userInfoValue.address}
      </div>
      <div className="row-app-show-page">
        <b>Başvuru Nedeni:</b>
        {userInfoValue.applicationReason}
      </div>
      <div className="row-app-show-page">
        <b>Başvuru Durumu:</b>
        {userInfoValue.applicationStatus}
      </div>
      <div className="row-app-show-page">
        <b>Başvuru Sonucu:</b>
        {userInfoValue.applicationResult}
      </div>
    </>
  );
}

export default AppInfoField;
