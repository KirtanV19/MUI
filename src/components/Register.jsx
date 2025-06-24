import CustomAuthForm from "../shared/CustomAuthForm";
import { registerFields } from "../utils/formFields";
import { registerSchema } from "../utils/validations";

const Register = () => {
    const handleRegister = (data) => {
        console.log("Register data:", data);
        // Send to json-server or backend
    };

    return <CustomAuthForm fields={registerFields} schema={registerSchema} onSubmit={handleRegister} label='Register' />;
};

export default Register;
