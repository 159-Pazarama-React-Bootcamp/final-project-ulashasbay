import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import "./index.css";

function ApplicationStatusPage() {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      basvuruNo: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="admin-login-container">
      <h1>Başvuru Sorgula</h1>
      <form className="application-status-form" onSubmit={handleSubmit}>
        <Input
          name="basvuruNo"
          type="text"
          text="Başvuru Numarası"
          placeholder="Başvuru No"
          onChange={handleChange}
        />
        <button className="login-button" type="submit">
          Başvuru Sorgula
        </button>
      </form>
    </div>
  );
}

export default ApplicationStatusPage;
