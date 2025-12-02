import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const userSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]{2,150}$/, "Name must contain only letters and spaces"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  phone: yup
    .string()
    .required("Phone number is required")
    .test("is-valid-indian-phone", "Invalid Indian mobile number", (value) => {
      if (!value) return false;
      const phone = parsePhoneNumberFromString(value, "IN");
      return (
        Boolean(phone?.isValid()) && 
        /^[6-9]/.test(phone?.nationalNumber || "")
      );
    }),
});
