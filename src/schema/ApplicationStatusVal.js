import * as yup from "yup";

const ApplicationStatusVal = yup.object().shape({
  basvuruNo: yup.string().required("Lütfen Başvuru Numaranızı Giriniz!"),
});

export default ApplicationStatusVal;
