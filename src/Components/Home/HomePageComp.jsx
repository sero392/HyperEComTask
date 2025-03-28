import { Button, Grid, IconButton, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PaginationComp from "./PaginationComp";
import { ShoppingCart } from "lucide-solid";
import { BaggageClaim, ShoppingCartIcon, View } from "lucide-react";
import { addBasketItem } from "../../Features/BasketSlice";
import ProductFilterComp from "./ProductFilterComp";
import useLocalize from "../../Commons/CustomHooks/LocalizeHooks";
export default function HomePageComp({ setLoading }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const selectedLang = useSelector(state => state.global.selectedLang);
    const str_add_cart = useLocalize(selectedLang,'str_add_cart');
    const str_view = useLocalize(selectedLang,'str_view');
    return (
        <>
            <ProductFilterComp setLoading={setLoading}></ProductFilterComp>
            <div className="flex flex-col items-center mt-5 overflow-y-auto">
                {products.length === 0 ? (
                    <div className="flex justify-center items-center min-h-100">
                        <span className="text-xl font-bold">
                            Ürün Bulunamadı!
                        </span>
                    </div>
                )
                    :
                    (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full p-5">
                            {
                                products.map((product, index) => {
                                    return (
                                        <div key={index} className="relative  shadow-md shadow-gray-500/50 h-90 sm:h-72
                                     rounded-lg overflow-hidden group">
                                            <div className="absolute inset-0 z-1 transition-all duration-300 group-hover:blur-sm ">
                                                <img src={product?.productData?.productMainImage} alt={product?.productName} className="w-full rounded-t-md  object-cover h-48" />
                                                <div className="flex justify-center items-center flex-col p-5">
                                                    <span className="font-bold text-md text-blue-400">
                                                        {product?.marketPrice?.toFixed(2)} TL
                                                    </span>
                                                </div>

                                                <div className="flex sm:hidden justify-center items-center flex-col px-5 pb-5">
                                                    <Button fullWidth onClick={() => dispatch(addBasketItem(product))}
                                                        sx={{
                                                            fontSize: 11,
                                                            backgroundColor: '#4db6ac',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        <ShoppingCartIcon size={15}></ShoppingCartIcon>
                                                        <span className="ml-2">
                                                           {str_add_cart}
                                                        </span>
                                                    </Button>
                                                    <Button
                                                           sx={{
                                                            fontSize: 11,
                                                            backgroundColor: '#26c6da',
                                                            color: 'white',
                                                        }}
                                                        fullWidth size="small" variant="contained" className="!mt-2">
                                                        <View size={15}></View>
                                                        <span className="ml-2">
                                                            {str_view}
                                                        </span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div  className="absolute inset-0 bg-transparent z-0
                                    text-white flex flex-col items-center justify-center text-md opacity-0 
                                    transition-opacity duration-300 group-hover:z-2 group-hover:opacity-100 text-center">
                                                <span className="text-white p-3 text-sm font-bold">
                                                    {product?.productName}
                                                </span>
                                                <div className="flex flex-col">
                                                    <Button size="small" variant="contained" onClick={() => dispatch(addBasketItem(product))}>
                                                        <ShoppingCartIcon size={15}></ShoppingCartIcon>
                                                        <span className="ml-2">
                                                         {str_add_cart}
                                                        </span>
                                                    </Button>
                                                    <Button size="small" variant="contained" className="!mt-2">
                                                        <View size={15}></View>
                                                        <span className="ml-2">
                                                        {str_view}
                                                        </span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

                <PaginationComp setLoading={setLoading} className="p-5"></PaginationComp>
            </div>

        </>

    )
}