import * as yup from "yup";

const AdminLoginVal = yup.object().shape({
  username: yup
    .string()
    .required("Lütfen Kullanıcı Adınızı Giriniz!")
    .matches(/^kodluyoruz$/, "Kullanıcı Adı Hatalı!"),
  password: yup
    .string()
    .required("Lütfen Şifrenizi Giriniz!")
    .matches(/^bootcamp109$/, "Şifre Hatalı!"),
});

export default AdminLoginVal;
