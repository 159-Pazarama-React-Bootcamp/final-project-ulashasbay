import * as yup from "yup";

const ApplicationFormVal = yup.object().shape({
  name: yup
    .string()
    .required("Lütfen Adınızı Giriniz!")
    .matches(/^([^0-9]*)$/, "Adınız Rakam İçermemelidir!"),
  surname: yup
    .string()
    .required("Lütfen Soyadınızı Giriniz!")
    .matches(/^([^0-9]*)$/, "Soyadınız Rakam İçermemelidir!"),
  age: yup
    .number("Lütfen Yaşınızı Doğru Giriniz!")
    .required("Lütfen Yaşınızı Giriniz!")
    .positive("Lütfen Yaşınızı Doğru Giriniz!")
    .integer("Lütfen Yaşınızı Doğru Giriniz!")
    .typeError("Lütfen Yaşınızı Doğru Giriniz!")
    .min(16, "Yaşınız 16'dan Büyük Olmalıdır!")
    .max(150, "Lütfen Yaşınızı Doğru Giriniz!"),
  tcNo: yup
    .string()
    .required("Lütfen T.C. Kimlik Numaranızı Giriniz!")
    .matches(
      new RegExp("^[0-9]{11,11}$"),
      "T.C. Kimlik Numaranız 11 Haneli Olmalı ve Yalnızca Rakam İçermelidir!"
    ),
  applicationReason: yup
    .string()
    .required("Lütfen Başvuru Nedeninizi Giriniz!")
    .matches(/^([^0-9]*)$/, "Başvuru Nedeniniz Rakam İçermemelidir!"),
  address: yup.string().required("Lütfen Adres Bilginizi Giriniz!"),
  imageUrl: yup
    .mixed()
    .nullable()
    .notRequired()
    .test(
      "FILE_SIZE",
      "Dosya boyutu en fazla 50 mb olabilir!",
      (value) => !value || (value && value.size <= 50000000)
    )
    .test(
      "FILE_FORMAT",
      "Dosya formatı .jpg .jpeg .png olmalıdır!",
      (value) =>
        !value ||
        (value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type))
    ),
});

export default ApplicationFormVal;
