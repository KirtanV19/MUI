import CustomAuthForm from "../shared/CustomAuthForm";
import { loginFields } from "../utils/formFields";
import { loginSchema } from "../utils/validations";
import { api } from "../api/client";

const Login = () => {
    const handleSubmit = async (values) => {
        console.log("data", values);
        try {
            const response = await api.USERS.getAll({
                params: {
                    email: values.email,
                    password: values.password,
                },
            });
            console.log("Login successful:", response);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <CustomAuthForm
            label="Login"
            fields={loginFields}
            schema={loginSchema}
            onSubmit={handleSubmit}
        />
    );
};

export default Login;
