import * as yup from "yup";

const ApplicationFormVal = yup.object().shape({
  ad: yup.string().required("Lütfen Adınızı Giriniz!"),
  soyad: yup.string().required("Lütfen Soyadınızı Giriniz!"),
  yas: yup
    .number("Lütfen Yaşınızı Doğru Giriniz!")
    .required("Lütfen Yaşınızı Giriniz!")
    .positive("Lütfen Yaşınızı Doğru Giriniz!")
    .integer("Lütfen Yaşınızı Doğru Giriniz!")
    .typeError("Lütfen Yaşınızı Doğru Giriniz!")
    .min(16, "Yaşınız 16'dan Büyük Olmalı!")
    .max(150, "Lütfen Yaşınızı Doğru Giriniz!"),
  tcNo: yup
    .string()
    .required("Lütfen T.C. Kimlik Numaranızı Giriniz!")
    .matches(
      new RegExp("^[0-9]{11,11}$"),
      "Lütfen T.C. Kimlik Numaranızı Doğru Giriniz!"
    ),
  basvuruNedeni: yup.string().required("Lütfen Başvuru Nedeninizi Giriniz!"),
  adres: yup.string().required("Lütfen Adres Bilginizi Giriniz!"),
});

export default ApplicationFormVal;
