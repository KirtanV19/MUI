import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

const CustomTable = ({
    height = 500,
    rows = [],
    columns = [],
    loading,
    rowCount,
    limitOptions,
    page,
    limit,
    setPage,
    setLimit,
    ...props
}) => {
    console.log("📊 DataGrid Props", {
        rows,
        columns,
        rowCount,
        page,
        limit,
        limitOptions,
    });
    return (
        <Box sx={{ height, width: "100%" }}>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : rows.length === 0 ? (
                <Typography textAlign="center" mt={4}>
                    No records found.
                </Typography>
            ) : (
                <DataGrid
                    rows={rows}
                    loading={loading}
                    columns={columns}
                    pagination
                    paginationMode="server"
                    pageSizeOptions={limitOptions}
                    rowCount={rowCount}
                    paginationModel={{
                        page: page,
                        pageSize: limit,
                    }}
                    onPaginationModelChange={(model) => {
                        setPage?.(model.page);
                        setLimit?.(model.pageSize);
                    }}
                    {...props}
                />
            )}
        </Box>
    );
};

export default CustomTable;
