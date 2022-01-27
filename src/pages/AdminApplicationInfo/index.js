import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import AdminApplicationInfoVal from "../../schema/AdminApplicationInfoVal";
import AppInfoField from "../../components/AppInfoField";
import TextArea from "../../components/TextArea";
import { useSelector } from "react-redux";
import "./index.css";

function AdminApplicationInfo() {
  let navigate = useNavigate();
  const appIdValue = useSelector((state) => state.appId.value);

  const handleClickBack = () => {
    navigate("/admin/basvuru-listesi");
  };

  // Admin tarafından verilen yanıtı/başvuru sonucunu firebase de güncelleyen fonksiyon
  const updateApplicationResult = async (id, change) => {
    const appRef = doc(db, "applications", id);
    await updateDoc(appRef, {
      applicationResult: change,
      applicationStatus: "Yanıtlandı",
    });
    navigate("/admin/basvuru-listesi");
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        applicationResult: "",
      },
      onSubmit: (values) => {
        updateApplicationResult(appIdValue, values.applicationResult);
      },
      validationSchema: AdminApplicationInfoVal,
    }
  );
  return (
    <div className="admin-app-info-container">
      <h1>Kullanıcı Başvuru Bilgileri</h1>
      <form className="admin-app-info" onSubmit={handleSubmit}>
        <AppInfoField />
        <div className="admin-user-row">
          <TextArea
            text="Yanıt"
            name="applicationResult"
            placeholder="Yanıt"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.applicationResult && touched.applicationResult && (
            <span className="admin-user-errors">
              {errors.applicationResult}
            </span>
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

export default AdminApplicationInfo;
