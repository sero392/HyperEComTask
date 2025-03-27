import { Button, Grid, IconButton, Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import PaginationComp from "./PaginationComp";
import { ShoppingCart } from "lucide-solid";
import { ShoppingCartIcon, View } from "lucide-react";
export default function HomePageComp({setLoading}) {
    const products = useSelector((state) => state.product.products);

    return (
        <>
            <div className="flex flex-col items-center mt-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full p-5">
                    {
                        products.map((product, index) => {
                            return (
                                <div key={index} className="relative  shadow-md shadow-gray-500/50 h-72
                                     rounded-lg overflow-hidden group">
                                    <div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm">
                                        <img src={product?.productData?.productMainImage} alt={product?.productName} className="w-full rounded-t-md  object-cover h-48" />
                                        <div className="flex justify-center items-center flex-col p-5">
                                            <span className="font-bold text-md text-blue-400">
                                                {product?.marketPrice?.toFixed(2)} TL
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-transparent 
                                    text-white flex flex-col items-center justify-center text-md opacity-0 
                                    transition-opacity duration-300 group-hover:opacity-100 text-center">
                                        <span className="text-white p-3 text-sm font-bold">
                                            {product?.productName}
                                        </span>
                                        <div className="flex flex-col">
                                            <Button size="small" variant="contained">
                                                <ShoppingCartIcon size={15}></ShoppingCartIcon>
                                                <span className="ml-2">
                                                    Sepete Ekle
                                                </span>
                                            </Button>
                                            <Button size="small" variant="contained" className="!mt-2">
                                                <View size={15}></View>
                                                <span className="ml-2">
                                                    Gör
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <PaginationComp setLoading={setLoading} className="p-5"></PaginationComp>
            </div>

        </>

    )
}