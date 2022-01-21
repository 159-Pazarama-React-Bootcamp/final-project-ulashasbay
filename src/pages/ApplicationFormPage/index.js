import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import ApplicationFormVal from "../../schema/ApplicationFormVal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./index.css";
import { useApp } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {
  let navigate = useNavigate();

  const { setAppId, setAppInfo } = useApp();

  const userColRef = collection(db, "applications");
  const createUser = async (data) => {
    const docRef = await addDoc(userColRef, data);
    // console.log(docRef.id)
    await setAppId(docRef.id);
    await setAppInfo(data);
    navigate(`/basvuru-olumlu`);
  };
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        ad: "",
        soyad: "",
        yas: "",
        tcNo: "",
        basvuruNedeni: "",
        adres: "",
        fotograf: "",
        basvuruSonuc: "Beklemede",
      },
      onSubmit: (values) => {
        createUser(values);
      },
      validationSchema: ApplicationFormVal,
    }
  );
  return (
    <div className="admin-login-container">
      <h1>Başvuru Formu</h1>

      <form className="application-form" onSubmit={handleSubmit}>
        <div className="row">
          <Input
            name="ad"
            type="text"
            text="Ad"
            placeholder="Ad"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.ad && touched.ad && (
            <span className="login-errors">{errors.ad}</span>
          )}
        </div>
        <div className="row">
          <Input
            name="soyad"
            type="text"
            text="Soyad"
            placeholder="Soyad"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.soyad && touched.soyad && (
            <span className="login-errors">{errors.soyad}</span>
          )}
        </div>
        <div className="row">
          <Input
            name="yas"
            type="text"
            text="Yaş"
            placeholder="Yaş"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.yas && touched.yas && (
            <span className="login-errors">{errors.yas}</span>
          )}
        </div>
        <div className="row">
          <Input
            name="tcNo"
            type="text"
            text="TC Kimlik No"
            placeholder="TC Kimlik No"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.tcNo && touched.tcNo && (
            <span className="login-errors">{errors.tcNo}</span>
          )}
        </div>
        <div className="row">
          <Input
            name="basvuruNedeni"
            type="text"
            text="Başvuru Nedeni"
            placeholder="Başvuru Nedeni"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.basvuruNedeni && touched.basvuruNedeni && (
            <span className="login-errors">{errors.basvuruNedeni}</span>
          )}
        </div>
        <div className="row">
          <label htmlFor="adres">Adres</label>
          <textarea
            name="adres"
            placeholder="Adres"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.adres && touched.adres && (
            <span className="login-errors">{errors.adres}</span>
          )}
        </div>
        <div className="row">
          <Input
            name="fotograf"
            type="file"
            text="Fotoğraf"
            placeholder="Fotoğraf"
            onChange={handleChange}
          />
        </div>
        <button className="login-button" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
}

export default ApplicationFormPage;
