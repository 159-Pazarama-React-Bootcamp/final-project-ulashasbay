import * as yup from "yup";

const ApplicationCheckVal = yup.object().shape({
  basvuruNo: yup.string().required("Lütfen Başvuru Numaranızı Giriniz!"),
});

export default ApplicationCheckVal;
