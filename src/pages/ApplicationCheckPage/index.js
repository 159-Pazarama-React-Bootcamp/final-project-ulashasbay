import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import ApplicationStatusVal from "../../schema/ApplicationStatusVal";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useApp } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import "./index.css";

function ApplicationCheckPage() {
  
  let navigate = useNavigate();
  const { setAppInfo, setAppId } = useApp(); 

  const getUser = async (id) => {
    const noteSnapshot = await getDoc(doc(db, "applications", id));
    if (noteSnapshot.exists()) {
      await setAppId(id);
      await setAppInfo(noteSnapshot.data());
      navigate(`/basvuru/${id}`);
    } else {
      console.log("Böyle bir kullanıcı bulunmuyor");
    }
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        basvuruNo: "",
      },
      onSubmit:(values) => {
        getUser(values.basvuruNo);
      },
      validationSchema: ApplicationStatusVal,
    }
  );
  return (
    <div className="admin-login-container">
      <h1>Başvuru Sorgula</h1>
      <form className="application-status-form" onSubmit={handleSubmit}>
        <div className="row">
          <Input
            name="basvuruNo"
            type="text"
            text="Başvuru Numarası"
            placeholder="Başvuru No"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.basvuruNo && touched.basvuruNo && (
            <span className="login-errors">{errors.basvuruNo}</span>
          )}
        </div>
        <button className="login-button" type="submit">
          Başvuru Sorgula
        </button>
      </form>
    </div>
  );
}

export default ApplicationCheckPage;
