import React from "react";
import { useSelector } from "react-redux";

function AppInfoArea() {
  const appIdValue = useSelector((state) => state.appId.value);
  const userInfoValue = useSelector((state) => state.userInfo.value);

  return (
    <>
      <div className="row-app-show-page">Başvuru No: {appIdValue}</div>
      <div className="row-app-show-page">Ad: {userInfoValue.ad}</div>
      <div className="row-app-show-page">Yaş: {userInfoValue.yas}</div>
      <div className="row-app-show-page">
        T.C Kimlik No: {userInfoValue.tcNo}
      </div>
      <div className="row-app-show-page">
        Başvuru Nedeni: {userInfoValue.basvuruNedeni}
      </div>
      <div className="row-app-show-page">Adres: {userInfoValue.adres} </div>
      <div className="row-app-show-page">
        Başvuru Sonucu: {userInfoValue.basvuruSonuc}
      </div>
    </>
  );
}

export default AppInfoArea;
