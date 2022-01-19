import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import "./index.css";
import AdminLoginVal from "../../schema/AdminLoginVal";

function AdminLoginPage() {
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: AdminLoginVal,
    }
  );
  return (
    <div className="admin-login-container">
      <h1>Giriş Yap</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="row">
          <Input
            name="username"
            type="text"
            text="Kullanıcı Adı"
            placeholder="Kullanıcı Adı"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username && (
            <span className="login-errors">{errors.username}</span>
          )}
        </div>
        <div className="row">
          <Input
            name="password"
            type="password"
            text="Password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <span className="login-errors">{errors.password}</span>
          )}
        </div>
        <button className="login-button" type="submit">
          Giriş
        </button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
