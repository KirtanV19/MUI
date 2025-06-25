import { useEffect } from "react";
import CustomTable from "../shared/CustomTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/user.slices";
import useFilter from "../hooks/useFilter";

const Users = () => {
    const { items, loading, error } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const { filter, setFilter } = useFilter();

    useEffect(() => {
        dispatch(fetchUsers({ params: { ...filter } }));
    }, [dispatch, filter]);

    console.log("Users:- ", items);

    const columns = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "role", headerName: "Role", flex: 1 },
    ];

    if (error) {
        return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;
    }

    return (
        <div style={{ padding: 20 }}>
            <CustomTable data={items} columns={columns} loading={loading} />
        </div>
    );
};

export default Users;
