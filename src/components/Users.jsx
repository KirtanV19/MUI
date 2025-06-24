import { useEffect } from "react";
import CustomTable from "../shared/CustomTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/user.slices";

const Users = () => {
    const { items } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers({}));
    }, [dispatch]);

    console.log("Users:- ", items);
    return (
        <div>
            {/* <CustomTable /> */}
            <h1>Users</h1>
        </div>
    );
};

export default Users;
