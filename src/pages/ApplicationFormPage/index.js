import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import ApplicationFormVal from "../../schema/ApplicationFormVal";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAppId } from "../../redux/appId/appIdSlice";
import { updateUserInfo } from "../../redux/userInfo/userInfoSlice";
import "./index.css";

function ApplicationFormPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");
  const [uploadProgres, setUploadProgress] = useState("");

  const fileOnChange = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  };

  const userColRef = collection(db, "applications");
  const createUser = async (data) => {
    const docRef = await addDoc(userColRef, data);
    dispatch(updateAppId(docRef.id));
    dispatch(updateUserInfo(data));
    navigate(`/basvuru-basarili`);
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        ad: "",
        soyad: "",
        yas: "",
        tcNo: "",
        basvuruNedeni: "",
        adres: "",
        basvuruDurumu: "Bekliyor",
        fotograf: imageUrl,
        basvuruSonuc: "Yanıt Bekleniyor",
        basvuruTarihi: new Date().toLocaleString().slice(0, 10),
      },
      onSubmit: (values) => {
        values.fotograf = imageUrl;
        createUser(values);
      },
      validationSchema: ApplicationFormVal,
    }
  );
  return (
    <div className="application-form-container">
      <h1>Başvuru Formu</h1>
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="application-form-row">
          <Input
            name="ad"
            type="text"
            text="Ad"
            placeholder="Ad"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.ad && touched.ad && (
            <span className="app-form-errors">{errors.ad}</span>
          )}
        </div>
        <div className="application-form-row">
          <Input
            name="soyad"
            type="text"
            text="Soyad"
            placeholder="Soyad"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.soyad && touched.soyad && (
            <span className="app-form-errors">{errors.soyad}</span>
          )}
        </div>
        <div className="application-form-row">
          <Input
            name="yas"
            type="text"
            text="Yaş"
            placeholder="Yaş"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.yas && touched.yas && (
            <span className="app-form-errors">{errors.yas}</span>
          )}
        </div>
        <div className="application-form-row">
          <Input
            name="tcNo"
            type="text"
            text="TC Kimlik No"
            placeholder="TC Kimlik No"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.tcNo && touched.tcNo && (
            <span className="app-form-errors">{errors.tcNo}</span>
          )}
        </div>
        <div className="application-form-row">
          <Input
            name="basvuruNedeni"
            type="text"
            text="Başvuru Nedeni"
            placeholder="Başvuru Nedeni"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.basvuruNedeni && touched.basvuruNedeni && (
            <span className="app-form-errors">{errors.basvuruNedeni}</span>
          )}
        </div>
        <div className="application-form-row">
          <label htmlFor="adres">Adres</label>
          <textarea
            name="adres"
            placeholder="Adres"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.adres && touched.adres && (
            <span className="app-form-errors">{errors.adres}</span>
          )}
        </div>
        <div className="application-form-row">
          <Input
            name="fotograf"
            type="file"
            text="Fotoğraf"
            placeholder="Fotoğraf"
            onChange={fileOnChange}
          />
          {!(uploadProgres === "") && (
            <span className="file-upload-progress">
              Dosya Yükleniyor: %{uploadProgres}
            </span>
          )}
        </div>
        <button className="login-button" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
}

export default ApplicationFormPage;
