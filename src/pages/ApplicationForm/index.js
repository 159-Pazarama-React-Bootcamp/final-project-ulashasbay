import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import FormSubmitBtn from "../../components/FormSubmitBtn";
import TextArea from "../../components/TextArea";
import ApplicationFormVal from "../../schema/ApplicationFormVal";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAppId } from "../../redux/appId/appIdSlice";
import { updateUserInfo } from "../../redux/userInfo/userInfoSlice";
import "./index.css";

function ApplicationForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgres, setUploadProgress] = useState("");

  // Başvuru formuna kullanıcı tarafından fotograf eklendiğinde form submit edilirken çalışan fonksiyon
  // - Fotografı firebase storage a upload ediyor
  // - Upload edilen Fotografın url sini alıp kullanıcı başvuru bilgilerine ekliyor
  // - Kullanıcı başvuru bilgilerini firebase database e upload ediyor
  const createApplicationWithImg = (values) => {
    const file = values.imageUrl;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setIsLoading(true);
        setUploadProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          values.imageUrl = downloadURL;
          createApplication(values);
        });
      }
    );
  };

  // Başvuru formuna kullanıcı tarafından fotograf eklenmediğinde form submit edilirken çalışan fonksiyon
  // Kullanıcı başvuru bilgilerini Firebase Database e upload ediyor
  const userColRef = collection(db, "applications");
  const createApplication = async (data) => {
    const docRef = await addDoc(userColRef, data);
    dispatch(updateAppId(docRef.id));
    dispatch(updateUserInfo(data));
    navigate(`/basvuru-basarili`);
    setIsLoading(false);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      tcNo: "",
      applicationReason: "",
      address: "",
      applicationStatus: "Bekliyor",
      applicationResult: "Belirsiz",
      applicationDate: new Date()
        .toLocaleString("en-GB", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
        .slice(0, 10),
    },
    onSubmit: (values) => {
      if (!("imageUrl" in values)) {
        createApplication(values);
      } else {
        createApplicationWithImg(values);
      }
    },
    validationSchema: ApplicationFormVal,
  });
  return (
    <>
      {isLoading ? (
        <div className="form-loading">Gönderiliyor... %{uploadProgres}</div>
      ) : (
        <div className="application-form-container">
          <h1>Başvuru Formu</h1>
          <form className="application-form" onSubmit={handleSubmit}>
            <div className="application-form-row">
              <Input
                name="name"
                type="text"
                text="Ad"
                placeholder="Ad"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <span className="app-form-errors">{errors.name}</span>
              )}
            </div>
            <div className="application-form-row">
              <Input
                name="surname"
                type="text"
                text="Soyad"
                placeholder="Soyad"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.surname && touched.surname && (
                <span className="app-form-errors">{errors.surname}</span>
              )}
            </div>
            <div className="application-form-row">
              <Input
                name="age"
                type="text"
                text="Yaş"
                placeholder="Yaş"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.age && touched.age && (
                <span className="app-form-errors">{errors.age}</span>
              )}
            </div>
            <div className="application-form-row">
              <Input
                name="tcNo"
                type="text"
                text="T.C. Kimlik No"
                placeholder="T.C. Kimlik No"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.tcNo && touched.tcNo && (
                <span className="app-form-errors">{errors.tcNo}</span>
              )}
            </div>
            <div className="application-form-row">
              <Input
                name="applicationReason"
                type="text"
                text="Başvuru Nedeni"
                placeholder="Başvuru Nedeni"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.applicationReason && touched.applicationReason && (
                <span className="app-form-errors">
                  {errors.applicationReason}
                </span>
              )}
            </div>
            <div className="application-form-row">
              <TextArea
                text="Adres"
                name="address"
                placeholder="Adres"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address && (
                <span className="app-form-errors">{errors.address}</span>
              )}
            </div>
            <div className="application-form-row">
              <Input
                name="imageUrl"
                type="file"
                text="Fotoğraf"
                placeholder="Fotoğraf"
                onChange={(event) => {
                  setFieldValue("imageUrl", event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
              />
              {errors.imageUrl && touched.imageUrl && (
                <span className="app-form-errors">{errors.imageUrl}</span>
              )}
            </div>
            <FormSubmitBtn disabled={isLoading} text="Gönder" />
          </form>
        </div>
      )}
    </>
  );
}

export default ApplicationForm;
