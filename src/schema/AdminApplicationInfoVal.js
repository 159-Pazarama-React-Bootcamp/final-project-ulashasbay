import * as yup from "yup";

const AdminApplicationInfoVal = yup.object().shape({
  applicationResult: yup.string().trim().required("Lütfen Yanıt Giriniz!"),
});

export default AdminApplicationInfoVal;