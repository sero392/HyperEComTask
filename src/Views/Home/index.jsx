//SinglePageApp olduğu için tek bir sayfa oluşturuldu.
//Yarın öbür gün route yapısı eklenirse views klasörü içerisine eklemeler yapılabilir.

import { useEffect, useState } from "react";
import HomePageComp from "../../Components/Home/HomePageComp";
import { getData, postData } from "../../Api/ApiService";
import ProductFilterComp from "../../Components/Home/ProductFilterComp";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../Features/ProductSlice";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Home } from "lucide-react";

export default function HomeIndex({ setLoading }) {
    const dispatch = useDispatch();


    useEffect(() => {
        //Normal şartlarda loading redux üzerinden yönetilebilir.
        //Fakat başka bir sayfa olmadığı için burada tutuyorum.
        //Bu component unmount vs. olursa hata alınabilir.
        const fecthData = async () => {
            setLoading(true);
            await dispatch(getProductList({currentPage : 1})); //Loadingten dolayı mecburen bekletiyorum.
            setLoading(false);
        }
        fecthData();
    }, [dispatch]);

    return (
        <>
            <div className="px-5 bg-gray-200  p-3">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        <Home size={20}></Home>
                    </Link>
                    <Typography sx={{ fontSize: 13, fontWeight: 'bold', color: '#333' }}>Products</Typography>
                </Breadcrumbs>
            </div>
            <div className="h-40 bg-linear-to-r  from-indigo-200 to-teal-100 
            grid grid-cols-1 md:grid-cols-2 items-center justify-center font-main">
                <div className="text-4xl md:text-left text-center px-20">
                    Valorant Points
                </div>
                <div className="hidden sm:flex flex-col items-center  max-w-84 mx-auto">
                    <span className="text-2xl ">
                        Valorant VP Satın Al - Sonteklif
                    </span>
                    <span className="text-xs mt-3 md:text-left text-center">
                        Valorant, 2020 yılında Riot Games tarafından piyasaya sürülen ve hızla popülerleşen bir FPS oyunudur.
                    </span>
                </div>
            </div>
            <HomePageComp setLoading={setLoading}></HomePageComp>
        </>

    )
}