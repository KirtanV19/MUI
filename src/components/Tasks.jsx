import { useEffect } from "react";
import CustomTable from "../shared/CustomTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/slices/task.slices";
import { Box } from "@mui/material";
import CustomButton from "../shared/CustomButton";

const Users = () => {
    const { items, loading, error } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks({}));
    }, [dispatch]);

    console.log("Tasks:- ", items);

    const columns = [
        { field: "title", headerName: "Title", flex: 1 },
        { field: "description", headerName: "Description", flex: 1 },
        { field: "status", headerName: "Status", flex: 1 },
        { field: "dueDate", headerName: "Due Date", flex: 1 },
        {
            field: "actions",
            headerName: "Action",
            flex: 1,
            sortable: false,
            renderCell: () => (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <CustomButton
                        variant="outlined"
                        size="small" // use custom-class
                        onClick={() => alert("accept")}
                    >
                        Accept
                    </CustomButton>
                    <CustomButton
                        variant="text"
                        size="small" // use custom-class
                        onClick={() => alert("reject")}
                    >
                        Reject
                    </CustomButton>
                </Box>
            ),
        },
    ];

    if (error) {
        return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;
    }

    return (
        <div>
            <CustomTable data={items} columns={columns} loading={loading} />
        </div>
    );
};

export default Users;
