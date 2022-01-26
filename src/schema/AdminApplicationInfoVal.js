import * as yup from "yup";

const AdminApplicationInfoVal = yup.object().shape({
  basvuruSonuc: yup.string().required("Lütfen Yanıt Giriniz!"),
});

export default AdminApplicationInfoVal;