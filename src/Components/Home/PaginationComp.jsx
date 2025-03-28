import { Pagination } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { DATA_LENGTH_PER_PAGE } from "../../Commons/Constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, setFilterModel } from "../../Features/ProductSlice";

const PaginationComp = ({ className, setLoading }) => {
    const dispatch = useDispatch();
    const productDataCount = useSelector((state) => state.product.productDataCount);
    const filterModel = useSelector((state) => state.product.filterModel);
    const [pageSize, setPageSize] = useState(0);


    useEffect(() => {
        setPageSize(Math.ceil(productDataCount / DATA_LENGTH_PER_PAGE));
    }, [productDataCount]);

    const changePage = async (_, value) => {
        setLoading(true);

     
        dispatch(setFilterModel({
            ...filterModel,
            currentPage: value,
        }));
        
        await dispatch(getProductList())
        setLoading(false);
    };
    return (
    <div
    >
            <Pagination className={className} onChange={changePage} count={pageSize}
            page={filterModel?.currentPage}
            color="primary">

        </Pagination>
    </div>
    )
}

//Gereksiz re-render'ın önüne geçiyoruz
export default React.memo(PaginationComp)