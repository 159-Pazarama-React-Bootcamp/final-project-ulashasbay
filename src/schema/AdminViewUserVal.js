import * as yup from "yup";

const AdminViewUserVal = yup.object().shape({
  basvuruSonuc: yup.string().required("Lütfen Yanıt Giriniz!"),
});

export default AdminViewUserVal;