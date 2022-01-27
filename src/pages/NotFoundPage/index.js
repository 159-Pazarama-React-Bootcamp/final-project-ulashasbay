import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NotFoundPage() {
  return (
    <div id="mainC">
      <div className="message">
        <h1>404</h1>
        <h3>The page you seek does not exist</h3>
      </div>
      <div className="footer">
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
