import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../shared/CustomButton";
import CustomTextField from "../shared/CustomTextField";
import { Stack, RadioGroup, FormLabel, FormControlLabel, FormControl, Radio } from "@mui/material";

const schema = yup.object({
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
    role: yup.string().required("Role is required"),
});

const Register = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "",
        },
    });

    const onSubmit = (data) => {
        console.log('data', data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} sx={{ width: 300, }}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <>
                            <CustomTextField
                                {...field}
                                label="Enter a name"
                                error={!!errors.name}
                            />
                            {errors.name && (
                                <span style={{ color: "#f44336", fontSize: 12 }}>
                                    {errors.name?.message}
                                </span>
                            )}
                        </>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <>
                            <CustomTextField
                                {...field}
                                label="Enter your email"
                                error={!!errors.email}
                            />
                            {errors.email && (
                                <span style={{ color: "#f44336", fontSize: 12 }}>
                                    {errors.email?.message}
                                </span>
                            )}
                        </>
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <>
                            <CustomTextField
                                {...field}
                                label="Enter your password"
                                type="password"
                                error={!!errors.password}
                            />
                            {errors.password && (
                                <span style={{ color: "#f44336", fontSize: 12 }}>
                                    {errors.password?.message}
                                </span>
                            )}
                        </>
                    )}
                />
                <Controller control={control} name="role" render={({ field }) => (
                    <FormControl error={!!errors.role}>
                        <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                        <RadioGroup
                            {...field}
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                            <FormControlLabel value="User" control={<Radio />} label="User" />
                        </RadioGroup>
                        {errors.role && (
                            <span style={{ color: "#f44336", fontSize: 12 }}>
                                {errors.role?.message}
                            </span>
                        )}
                    </FormControl>
                )} />
                <CustomButton type="submit">
                    Register
                </CustomButton>
            </Stack>
        </form >
    );
};

export default Register;
