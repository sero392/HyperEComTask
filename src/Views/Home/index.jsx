//SinglePageApp olduğu için tek bir sayfa oluşturuldu.
//Yarın öbür gün route yapısı eklenirse views klasörü içerisine eklemeler yapılabilir.

import { useEffect, useState } from "react";
import HomePageComp from "../../Components/Home/HomePageComp";
import { getData, postData } from "../../Api/ApiService";
import ProductFilterComp from "../../Components/Home/ProductFilterComp";

export default function HomeIndex() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'products/list';
        postData(url).then((response) => {
            console.log(response);
            if (response?.success) setProducts(response?.data);
        });
    }, []);

    return (
        <>
            <ProductFilterComp></ProductFilterComp>
            <HomePageComp products={products}></HomePageComp>
        </>

    )
}