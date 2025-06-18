import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 12, // same as '20 px'
    padding: "8px 20px",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export default CustomButton;
