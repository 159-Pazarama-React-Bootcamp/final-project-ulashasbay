import * as yup from "yup";

const ApplicationVal = yup.object().shape({
  ad: yup.string().required("Lütfen Adınızı Giriniz!"),
  soyad: yup.string().required("Lütfen Soyadınızı Giriniz!"),
  yas: yup
    .number("Lütfen Yaşınızı Doğru Giriniz!")
    .required("Lütfen Yaşınızı Giriniz!")
    .positive("Lütfen Yaşınızı Doğru Giriniz!")
    .integer("Lütfen Yaşınızı Doğru Giriniz!")
    .typeError("Lütfen Yaşınızı Doğru Giriniz!"),
  tcNo: yup
    .number("Lütfen T.C. Kimlik Numaranızı Doğru Giriniz!")
    .integer("Lütfen T.C. Kimlik Numaranızı Doğru Giriniz!")
    .required("Lütfen T.C. Kimlik Numaranızı Giriniz!")
    .typeError("Lütfen T.C. Kimlik Numaranızı Doğru Giriniz!"),
  basvuruNedeni: yup.string().required("Lütfen Başvuru Nedeninizi Giriniz!"),
  adres: yup.string().required("Lütfen Adres Bilginizi Giriniz!"),
});

export default ApplicationVal;
