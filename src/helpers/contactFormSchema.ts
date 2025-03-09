import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  discord: Yup.string()
    .required("Required")
    .matches(/^@[A-Za-z0-9_]+$/, "Wrong discord")
    .max(30, "Wrong discord"),
  metamask: Yup.string()
    .required("Required")
    .matches(/^(0x|1x)[A-Za-z0-9]+$/, "Wrong address")
    .min(18, "Wrong address")
    .max(42, "Wrong address"),
});
