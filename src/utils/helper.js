import * as yup from "yup";

{
  /* Password strength checker */
}
export const getPasswordStrength = (password) => {
  return [
    {
      label: "At least 8 characters",
      passed: password.length >= 8,
    },
    {
      label: "One lowercase letter",
      passed: /[a-z]/.test(password),
    },
    {
      label: "One uppercase letter",
      passed: /[A-Z]/.test(password),
    },
    {
      label: "One number [0-9]",
      passed: /\d/.test(password),
    },
    {
      label: "One special character",
      passed: /[@$!%*?&#^()\-_=+{};:,<.>]/.test(password),
    },
  ];
};

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#^()\-_=+{};:,<.>]/,
      "Password must contain at least one special character"
    ),
  role: yup
    .string()
    .oneOf(["admin", "user"], "Choose a role")
    .required("Role is required"),
});
