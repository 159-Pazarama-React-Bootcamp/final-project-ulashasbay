import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import "./index.css";
import AdminLoginVal from "../../schema/AdminLoginVal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateIsLoggedIn } from "../../redux/isLoggedIn/isLoggedInSlice";

function AdminLoginPage() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values) => {
        if (
          values.username === "kodluyoruz" &&
          values.password === "bootcamp109"
        ) {
          localStorage.setItem("username", "kodluyoruz");
          localStorage.setItem("password", "bootcamp109");
          dispatch(updateIsLoggedIn(true));
          navigate("/admin/basvuru-listesi");
        }
      },
      validationSchema: AdminLoginVal,
    }
  );

  return (
    <>
      <Navbar />
      <div className="admin-login-container">
        <h1>Giriş Yap</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-row">
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
          <div className="login-row">
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
    </>
  );
}

export default AdminLoginPage;
