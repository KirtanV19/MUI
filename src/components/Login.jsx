import CustomAuthForm from "../shared/CustomAuthForm"
import { loginFields } from "../utils/formFields"

const Login = () => {

    const handleSubmit = (data) => {
        console.log('data', data)
    }
    return <CustomAuthForm label='Login' fields={loginFields} onSubmit={handleSubmit} />
}

export default Login