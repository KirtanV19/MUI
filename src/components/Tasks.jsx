import { useEffect } from "react";
import CustomTable from "../shared/CustomTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/slices/task.slices";
import { Box } from "@mui/material";
import CustomButton from "../shared/CustomButton";
import useCustomDateRange from "../hooks/useCustomDateRange";
import DateRangePicker from "./DateRangePicker";
import useFilter from "../hooks/useFilter";

const Tasks = () => {
    const { items, loading, error } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const { endDate, setEndDate, setStartDate, startDate } = useCustomDateRange();
    const { filter, setFilter } = useFilter();

    const start = startDate ? startDate.format("YYYY-MM-DD") : undefined;
    const end = endDate ? endDate.format("YYYY-MM-DD") : undefined;

    useEffect(() => {
        dispatch(
            fetchTasks({
                params: { ...filter },
            })
        );
    }, [dispatch, filter]);

    useEffect(() => {
        setFilter((prev) => ({
            ...prev,
            ...(start && { dueDate_gte: start }),
            ...(end && { dueDate_lte: end }),
        }));
    }, [setFilter, start, end]);

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
            <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
            <CustomTable rows={items} columns={columns} loading={loading} />
        </div>
    );
};

export default Tasks;
