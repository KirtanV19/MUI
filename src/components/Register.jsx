import CustomAuthForm from "../shared/CustomAuthForm";
import { registerFields } from "../utils/formFields";
import { registerSchema } from "../utils/validations";
import { api } from "../api/client";

const Register = () => {
    const handleRegister = async (data) => {
        try {
            const userData = {
                ...data,
                userId: Date.now(),
            };
            console.log("User Data:- ", userData);
            await api.USERS.create({ data: userData });
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <CustomAuthForm
            fields={registerFields}
            schema={registerSchema}
            onSubmit={handleRegister}
            label="Register"
        />
    );
};

export default Register;
