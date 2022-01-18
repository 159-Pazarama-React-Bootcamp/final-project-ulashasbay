import React from "react";
import { Formik } from "formik";
import Input from "../../components/Input";
import "./index.css";

function ApplicationStatusPage() {
  return (
    <div className="admin-login-container">
      <h1>Başvuru Sorgula</h1>
      <Formik
        initialValues={{
          basvuruNo: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange }) => (
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
        )}
      </Formik>
    </div>
  );
}

export default ApplicationStatusPage;
