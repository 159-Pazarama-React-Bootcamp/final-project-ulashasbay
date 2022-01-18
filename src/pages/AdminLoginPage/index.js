import React from "react";
import "./index.css";
import Input from "../../components/Input";
import { useFormik } from "formik";

function AdminLoginPage() {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="admin-login-container">
      <h1>Giriş Yap</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          text="Kullanıcı Adı"
          placeholder="Kullanıcı Adı"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          text="Password"
          placeholder="password"
          onChange={handleChange}
        />
        <button className="login-button" type="submit">
          Giriş
        </button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
