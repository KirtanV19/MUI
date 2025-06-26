import { useEffect } from "react";
import CustomTable from "../shared/CustomTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/user.slices";
import useFilter from "../hooks/useFilter";
import CustomSelect from "../shared/CustomSelect";
import useLimit from "../hooks/useLimit";
import { Box } from "@mui/material";
import CustomSearch from "../shared/CustomSearch";
import useSearch from "../hooks/useSearch";
import useDebounce from "../hooks/useDebounce";
import usePage from "../hooks/usePage";

const Users = () => {
    const { items, loading, error } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const { filter, setFilter } = useFilter();
    const { limit, setLimit, limitOptions } = useLimit();
    const { query, setQuery } = useSearch();
    const { page, setPage } = usePage();
    const debouncedValue = useDebounce(query, 200);
    const { total } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(fetchUsers({ params: { ...filter } }));
    }, [dispatch, filter]);

    useEffect(() => {
        console.log("limit updated:", limit);
        console.log("query updated:", query);
    }, [limit, query]);

    useEffect(() => {
        setFilter((prev) => ({
            ...prev,
            _limit: limit,
            _page: page + 1,
            q: debouncedValue,
        }));
    }, [limit, debouncedValue, page, setFilter]);

    // console.log("Users:- ", items);
    // console.log("limitOptions:- ", limitOptions);

    const columns = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "role", headerName: "Role", flex: 1 },
    ];

    // console.log('filter:- ', filter)

    if (error) {
        return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;
    }

    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <CustomSelect
                    sx={{ width: 75 }}
                    limit={limit}
                    setLimit={setLimit}
                    limitOptions={limitOptions}
                />
                <CustomSearch
                    sx={{ width: 250 }}
                    placeholder="Search..."
                    query={query}
                    setQuery={setQuery}
                />
            </Box>
            <CustomTable
                data={items}
                columns={columns}
                loading={loading}
                limitOptions={limitOptions}
                rowCount={total}
                page={page}
                pageSize={limit}
                setPage={setPage}
                setLimit={setLimit}
            />
        </div>
    );
};

export default Users;
