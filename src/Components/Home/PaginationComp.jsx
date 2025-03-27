import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { DATA_LENGTH_PER_PAGE } from "../../Commons/Constants/Constants";
import { useDispatch } from "react-redux";
import { getProductList } from "../../Features/ProductSlice";

export default function PaginationComp({ className,setLoading }) {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(0);

    const length = 440; //Api count bulamadım o yüzden bir defa getirip count hesaplattım sabit bir şekilde tanımladım.

    useEffect(() => {
        setPageSize(Math.ceil(length / DATA_LENGTH_PER_PAGE));
    }, []);

    const changePage = async (_, value) => {
        setLoading(true);
        await dispatch(getProductList(value))
        setLoading(false);
    };
    return (
        <Pagination className={className} onChange={changePage} count={pageSize} color="primary">

        </Pagination>
    )
}