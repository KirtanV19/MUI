import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CustomSelect = ({ limit, setLimit, ...props }) => {
    const handleChange = (e) => {
        const newLimit = Number(e.target.value);
        console.log("newLimit: ", newLimit);
        setLimit(newLimit);
        console.log('limit:-', limit)
    };

    return (
        <Box sx={{ maxWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Page</InputLabel>
                <Select label="Page" value={limit} onChange={handleChange} {...props}>
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
