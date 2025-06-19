import { TextField } from "@mui/material";

const CustomTextField = ({ ...props }) => {

    return (
        <TextField variant="outlined" size="small"  {...props} />
    )
}

export default CustomTextField;