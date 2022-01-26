import * as yup from "yup";

const ApplicationQueryVal = yup.object().shape({
  basvuruNo: yup.string().required("Lütfen Başvuru Numaranızı Giriniz!"),
});

export default ApplicationQueryVal;
