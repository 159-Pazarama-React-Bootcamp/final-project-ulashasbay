import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function HomePage() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/basvuru-olustur");
  };
  return (
    <>
      <div className="home-row">
        <div className="content-wrapper ">
          <img
            className="home-img"
            src="https://www.entegrabilisim.com/uploads/images/yafgm-ss9od.jpg"
          />
        </div>
        <div className="content-wrapper">
          <h1 className="home-header">Bizimle Çalışmak İster misiniz?</h1>
          <p>
            Pazarama bünyesinde satıcı, çalışan veya stajyer olarak işe başlamak
            için hemen başvur!
          </p>
          <button className="btn-home" onClick={handleClick}>
            Hemen Başvur!
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
