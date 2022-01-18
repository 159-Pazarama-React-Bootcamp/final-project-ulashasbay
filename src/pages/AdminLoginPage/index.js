import React from "react";
import "./index.css";
import Input from "../../components/Input";

function AdminLoginPage() {
  return (
    <div className="admin-login-container">
      <h1>Login</h1>
      <form className="login-form">
        <Input
          name="email"
          type="email"
          text="Email"
          placeholder="email@example.com"
        />
        <Input
          name="password"
          type="password"
          text="Password"
          placeholder="password"
        />
        <button className="login-button" type="submit">
          Giriş
        </button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
