import CustomAuthForm from "../shared/CustomAuthForm";
import { registerFields } from "../utils/formFields";
import { registerSchema } from "../utils/validations";
import { registerUser } from "../redux/slices/user.slices";
import { useDispatch } from "react-redux";

const Register = () => {
    const dispatch = useDispatch();

    const handleRegister = async (data) => {
        try {
            const userData = {
                ...data,
                userId: Date.now(),
            };
            await dispatch(registerUser(userData)).unwrap();
            console.log("User Data:- ", userData);

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
