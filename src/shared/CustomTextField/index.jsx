import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// eslint-disable-next-line no-unused-vars
const CustomTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
        borderRadius: 12,
    },
}));

export default CustomTextField;
