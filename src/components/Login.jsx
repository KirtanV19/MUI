// Current user will visible here and through that we write logiinSchema.
// and aslo handleSumit will implementing

import CustomAuthForm from "../shared/CustomAuthForm";
import { loginFields } from "../utils/formFields";
import { loginSchema } from "../utils/validations";
const Login = () => {
    const handleSubmit = (data) => {
        console.log("data", data);
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
