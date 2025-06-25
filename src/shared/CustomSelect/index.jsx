import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const CustomSelect = ({ ...props }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        console.log("value:- ", newValue);
    };

    return (
        <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Page</InputLabel>
                <Select label="Page" value={value} onChange={handleChange} {...props}>
                    {[1, 2, 5, 10].map((num) => (
                        <MenuItem key={num} value={num}>
                            {num}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;
