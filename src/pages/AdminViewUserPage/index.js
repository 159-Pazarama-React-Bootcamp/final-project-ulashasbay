import React from "react";
import { useApp } from "../../context/appContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import AdminViewUserVal from "../../schema/AdminViewUserVal";

import "./index.css";

function AdminViewUserPage() {
  let navigate = useNavigate();
  const { appId, userInfo } = useApp();

  const handleClickBack = () => {
    navigate("/admin/basvuru-listesi");
  };

  const updateNote = async (id, change) => {
    const appRef = doc(db, "applications", id);
    await updateDoc(appRef, {
      basvuruSonuc: change,
    });
    navigate("/admin/basvuru-listesi");
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        basvuruSonuc: "",
      },
      onSubmit: (values) => {
        updateNote(appId, values.basvuruSonuc);
      },
      validationSchema: AdminViewUserVal,
    }
  );
  return (
    <div>
      <div className="admin-login-container">
        <h1>Kullanıcı Başvuru Bilgileri</h1>
        <form className="show-application-status" onSubmit={handleSubmit}>
          <div className="row-app-show-page">Başvuru No: {appId}</div>
          <div className="row-app-show-page">Ad: {userInfo.ad}</div>
          <div className="row-app-show-page">Yaş: {userInfo.yas}</div>
          <div className="row-app-show-page">
            T.C Kimlik No: {userInfo.tcNo}
          </div>
          <div className="row-app-show-page">
            Başvuru Nedeni: {userInfo.basvuruNedeni}
          </div>
          <div className="row-app-show-page">Adres: {userInfo.adres} </div>
          <div className="row-app-show-page">
            Başvuru Sonucu: {userInfo.basvuruSonuc}
          </div>
          <div className="row">
            <label htmlFor="basvuruSonuc">Yanıt</label>
            <textarea
              name="basvuruSonuc"
              placeholder="Yanıt"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.basvuruSonuc && touched.basvuruSonuc && (
              <span className="login-errors">{errors.basvuruSonuc}</span>
            )}
          </div>
          <button className="accept-button" type="submit">
            Gönder
          </button>
          <button
            className="reject-button"
            type="button"
            onClick={handleClickBack}
          >
            Geri
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminViewUserPage;
