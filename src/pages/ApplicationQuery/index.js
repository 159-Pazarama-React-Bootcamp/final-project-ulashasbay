import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import ApplicationQueryVal from "../../schema/ApplicationQueryVal";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAppId } from "../../redux/appId/appIdSlice";
import { updateUserInfo } from "../../redux/userInfo/userInfoSlice";
import "./index.css";

function ApplicationQuery() {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const getUser = async (id) => {
    const noteSnapshot = await getDoc(doc(db, "applications", id));
    if (noteSnapshot.exists()) {
      dispatch(updateAppId(id));
      dispatch(updateUserInfo(noteSnapshot.data()));
      navigate(`/basvuru/${id}`);
    } else {
      navigate(`/404-Not-Found`);
      console.log("Böyle bir kullanıcı bulunmuyor");
    }
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        basvuruNo: "",
      },
      onSubmit: (values) => {
        getUser(values.basvuruNo);
      },
      validationSchema: ApplicationQueryVal,
    }
  );
  return (
    <div className="app-check-container">
      <h1>Başvuru Sorgula</h1>
      <form className="application-check-form" onSubmit={handleSubmit}>
        <div className="app-check-row">
          <Input
            name="basvuruNo"
            type="text"
            text="Başvuru Numarası"
            placeholder="Başvuru No"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.basvuruNo && touched.basvuruNo && (
            <span className="app-check-errors">{errors.basvuruNo}</span>
          )}
        </div>
        <FormSubmitBtn text="Başvuru Sorgula" />
      </form>
    </div>
  );
}

export default ApplicationQuery;
