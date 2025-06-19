import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// eslint-disable-next-line no-unused-vars
const CustomTextField = styled(TextField)(({ theme }) => ({
    width: "100%",
    height: 50,
    "& .MuiInputBase-input": {
        padding: "12px 14px",
        fontSize: 16,
    },
    "& .MuiInputBase-root": {
        borderRadius: 4,
    },
}));

export default CustomTextField;
