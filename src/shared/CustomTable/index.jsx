import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

const CustomTable = ({ data = [], columns = [], loading = false, height = 500 }) => {
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
                    sx={{
                        "& .MuiDataGrid-columnHeaders": {
                            fontWeight: "bold",
                            fontSize: "1rem",
                        },
                    }}
                />
            )}
        </Box>
    );
};

export default CustomTable;
