import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import AdminViewUserVal from "../../schema/AdminViewUserVal";
import AppInfoArea from "../../components/AppInfoArea";
import { useSelector } from "react-redux";
import "./index.css";

function AdminUserInfoPage() {
  let navigate = useNavigate();

  const appIdValue = useSelector((state) => state.appId.value);

  const handleClickBack = () => {
    navigate("/admin/basvuru-listesi");
  };

  const updateNote = async (id, change) => {
    const appRef = doc(db, "applications", id);
    await updateDoc(appRef, {
      basvuruSonuc: change,
      basvuruDurumu: "Yanıtlandı",
    });
    navigate("/admin/basvuru-listesi");
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        basvuruSonuc: "",
      },
      onSubmit: (values) => {
        updateNote(appIdValue, values.basvuruSonuc);
      },
      validationSchema: AdminViewUserVal,
    }
  );
  return (
    <div className="admin-app-info-container">
      <h1>Kullanıcı Başvuru Bilgileri</h1>
      <form className="admin-app-info" onSubmit={handleSubmit}>
        <AppInfoArea />
        <div className="admin-user-row">
          <label htmlFor="basvuruSonuc">Yanıt</label>
          <textarea
            name="basvuruSonuc"
            placeholder="Yanıt"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.basvuruSonuc && touched.basvuruSonuc && (
            <span className="admin-user-errors">{errors.basvuruSonuc}</span>
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
  );
}

export default AdminUserInfoPage;
