import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

const CustomTable = ({
    height = 500,
    data = [],
    columns = [],
    loading,
    rowCount,
    limitOptions,
    page,
    pageSize,
    setPage,
    setLimit,
    ...props
}) => {
    console.log("📊 DataGrid Props", {
        rows: data,
        columns,
        rowCount,
        page,
        pageSize,
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
            ) : data.length === 0 ? (
                <Typography textAlign="center" mt={4}>
                    No records found.
                </Typography>
            ) : (
                <DataGrid
                    rows={data}
                    loading={loading}
                    columns={columns}
                    pagination
                    paginationMode="server"
                    pageSizeOptions={limitOptions}
                    rowCount={rowCount}
                    paginationModel={{
                        page: page,
                        pageSize: pageSize,
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
