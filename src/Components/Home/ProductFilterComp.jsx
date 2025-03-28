import { Box, TextField } from "@mui/material";
import SelectBoxComp from "../Common/SelectBox/SelectBoxComp";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronsDown } from "lucide-react";
import { getData } from "../../Api/ApiService";
import { DATA_LENGTH_PER_PAGE, GET_CATEGORY_URL, PRODUCT_DATA_LENGTH } from "../../Commons/Constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, setFilterModel, setProductDataCount } from "../../Features/ProductSlice";
import useLocalize from "../../Commons/CustomHooks/LocalizeHooks";

export default function ProductFilterComp({ setLoading }) {
    const dispatch = useDispatch();

    const selectedLang = useSelector(state => state.global.selectedLang);
    const str_please_select_category = useLocalize(selectedLang,'str_please_select_category');

    const [categoryList, setCategoryList] = useState([]);

    //Componentte herhangi bir state kullanılır ve değişirse tekrar tekrar render edilmesini
    //istemediğim için useCallback kullandım. (Güvenlik amaçlı)
    const fetchCategory = useCallback(() => {
        getData(GET_CATEGORY_URL).then((res) => {
            setCategoryList(res.data?.map((m) => (
                {
                    Id: m.productCategoryID,
                    Text: m.categoryName
                }
            )));
        })
    });

    useEffect(() => {
        fetchCategory();
    }, []);


    const changeCategory = (categoryId) => {
        //CategoryId Seçildiyse Paginasyonu Devre Dışı Bıraktım 
        //Yok seçili değilse ürünler sayfalama yapısını tabi tutuluyor
        //Eğer apiden canlı toplam count dönseydi kategorilerde sayfalamaya tabi tutulurdu.
        //setProductDataCount fonksiyonu ile sayfa sayısı hesaplanıyor kategori seçildiyse varsayılan 1 sayfa olması için
        //bir atanıyor.
        var filter = { currentPage: 1, productCategoryID: categoryId, dataCountPerPage: categoryId != 0 ? 0 : DATA_LENGTH_PER_PAGE };
        dispatch(setFilterModel(filter));
        setLoading(true);
        dispatch(getProductList()).then(() => {
            setLoading(false);
            if (categoryId == 0) dispatch(setProductDataCount(PRODUCT_DATA_LENGTH));
            else dispatch(setProductDataCount(1))
        });
    }
    return (
        <div className="px-5 py-5 rounded-md border-2 border-gray-50 bg-white mt-3 mx-3 ">
            <SelectBoxComp
                width=" w-[250px] lg:w-[300px] xl:w-[400px]"
                className="
             w-[250px] lg:w-[300px] xl:w-[400px]
            py-2 px-6 pr-10 rounded-lg
            appearance-none font-bold shadow-lg shadow-blue-400/50
            ring-2 ring-blue-50
             focus:outline-none focus:ring-4 focus:ring-blue-100 
            "
                onChange={(value) => changeCategory(value)}
                optionList={[
                    {
                        Id: 0,
                        Text: str_please_select_category
                    },
                    ...categoryList
                ]}
                triggerOnMount={false}
                dropDownIcon={
                    <ChevronsDown className="absolute top-2 right-2  pointer-events-none" />
                }
            >

            </SelectBoxComp>
        </div>

    )
}