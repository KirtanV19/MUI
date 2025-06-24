import { useEffect } from "react";
import CustomTable from "../shared/CustomTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/slices/task.slices";

const Users = () => {
    const { items } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks({}));
    }, [dispatch]);

    console.log("Tasks:- ", items);
    return (
        <div>
            {/* <CustomTable /> */}
            <h1>Tasks</h1>
        </div>
    );
};

export default Users;
