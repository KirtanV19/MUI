import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

const CustomTable = ({ data = [], columns = [], loading, height = 500, ...props }) => {
    return (
        <Box sx={{ height, width: "100%" }}>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <CircularProgress />
                </Box>
            ) : data.length === 0 ? (
                <Typography textAlign="center" mt={4}>
                    No records found.
                </Typography>
            ) : (
                <DataGrid
                    rows={data}
                    columns={columns}
                    {...props}
                />
            )}
        </Box>
    );
};

export default CustomTable;
