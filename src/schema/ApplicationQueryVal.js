import * as yup from "yup";

const ApplicationQueryVal = yup.object().shape({
  applicationNo: yup.string().required("Lütfen Başvuru Numaranızı Giriniz!"),
});

export default ApplicationQueryVal;
