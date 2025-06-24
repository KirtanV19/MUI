import * as yup from "yup";
import CustomAuthForm from "../shared/CustomAuthForm/index";
import { forgotPassFields } from "../utils/formFields";
import { api } from "../api/client";

const forgotPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required")
        .test(
            "checkUserExists",
            "User with this email does not exist",
            async (value) => {
                if (!value) return false;
                try {
                    const response = await api.USERS.getAll({ params: { email: value } });
                    console.log("response: ", response);
                    // return response;
                } catch (err) {
                    console.log('err', err)
                    return false;
                }
            }
        ),
    new: yup
        .string()
        .required("New password is required")
        .min(6, "Password must be at least 6 characters")
        .test(
            "isDifferentFromOldPassword",
            "New password must be different from old password",
            async function (value) {
                const { email } = this.parent;
                if (!value || !email) return false;
                try {
                    const response = await api.USERS.getAll({ params: { email } });
                    console.log("response: ", response);
                    // const user = response.data[0];
                    // return user && user.password !== value;
                } catch (err) {
                    console.log('err', err)
                    return false;
                }
            }
        ),
    confirm: yup
        .string()
        .oneOf([yup.ref("new"), null], "Passwords must match")
        .required("Confirm password is required"),
});

const ForgotPassword = () => {
    const handleForgot = (values) => console.log("values", values);
    return (
        <CustomAuthForm
            label="Reset Password"
            fields={forgotPassFields}
            onSubmit={handleForgot}
            schema={forgotPasswordSchema}
        />
    );
};

export default ForgotPassword;
