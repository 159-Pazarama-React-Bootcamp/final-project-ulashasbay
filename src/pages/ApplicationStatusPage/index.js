import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import ApplicationStatusVal from "../../schema/ApplicationStatusVal";
import "./index.css";

function ApplicationStatusPage() {
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        basvuruNo: "",
      },
      onSubmit: (values) => {
        console.log(values);
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

export default ApplicationStatusPage;
