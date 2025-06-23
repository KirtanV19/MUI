import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../shared/CustomButton";
import CustomTextField from "../shared/CustomTextField";
import {
    Stack,
    RadioGroup,
    FormLabel,
    FormControlLabel,
    FormControl,
    Radio,
    InputAdornment,
    Typography,
    Box
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerSchema } from "../utils/helper";
import { getPasswordStrength } from "../utils/helper";

const Register = () => {
    const [passwordValue, setPasswordValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "",
        },
    });

    const onSubmit = (data) => {
        console.log("data", data);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '100vh' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack justifyContent="center" alignItems="center" spacing={2} sx={{ width: 300, padding: 2 }}>
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
                                    type={showPassword ? "text" : "password"}
                                    error={!!errors.password}
                                    onChange={(e) => {
                                        setPasswordValue(e.target.value);
                                        field.onChange(e);
                                    }}
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <span
                                                        onClick={() => setShowPassword((prev) => !prev)}
                                                        style={{ cursor: "pointer" }}
                                                        aria-label={
                                                            showPassword ? "Hide password" : "Show password"
                                                        }
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </span>
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                />
                                {errors.password && (
                                    <span style={{ color: "#f44336", fontSize: 12 }}>
                                        {errors.password?.message}
                                    </span>
                                )}
                            </>
                        )}
                    />
                    {passwordValue && (
                        <Stack spacing={0.5}>
                            {getPasswordStrength(passwordValue).map(({ label, passed }) => (
                                <Typography
                                    key={label}
                                    variant="caption"
                                    color={passed ? "success.main" : "text.secondary"}
                                >
                                    {label}
                                </Typography>
                            ))}
                        </Stack>
                    )}
                    <Controller
                        control={control}
                        name="role"
                        render={({ field }) => (
                            <FormControl error={!!errors.role}>
                                <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                                <RadioGroup
                                    {...field}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="admin"
                                        control={<Radio />}
                                        label="Admin"
                                    />
                                    <FormControlLabel
                                        value="user"
                                        control={<Radio />}
                                        label="User"
                                    />
                                </RadioGroup>
                                {errors.role && (
                                    <span style={{ color: "#f44336", fontSize: 12 }}>
                                        {errors.role?.message}
                                    </span>
                                )}
                            </FormControl>
                        )}
                    />

                    <CustomButton type="submit">Register</CustomButton>
                </Stack>
            </form>
        </Box>
    );
};

export default Register;

/*

        */