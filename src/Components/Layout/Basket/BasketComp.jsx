import { Badge, Button, IconButton } from "@mui/material";
import { CircleX, EyeClosed, ShoppingBag, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, removeBasketItem } from "../../../Features/BasketSlice";

export default function BasketComp() {
    const dispatch = useDispatch();
    const addedItems = useSelector(state => state.basket.basketItems);

    return (
        <div className="w-full h-full">
            <div className="flex flex-col justify-center w-full h-full ">
                {
                    addedItems.length > 0 ? (
                        <>
                            <div className=" w-full overflow-y-auto">
                                {

                                    addedItems?.map((m, index) => (
                                        <div key={index} className="w-full  shadow-sm shadow-blue-400/30 relative mt-3">
                                            <div className="absolute right-0">
                                            <span className="rounded-full bg-blue-600 px-2 py-[2px]  text-white text-xs text-center  ">
                                                {m.Count}
                                            </span>
                                                <IconButton color="error" onClick={() => dispatch(removeBasketItem(m))}>
                                                    <CircleX></CircleX>
                                                </IconButton>


                                            </div>
                                            <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-2 w-full p-3 items-center">
                                                <img src={m.productData.productMainImage} alt={m.productName} className="w-20 h-20 object-cover rounded-md mx-auto" />

                                                <span className="text-md font-bold col-span-2 mx-auto">
                                                    {m.productName}
                                                </span>
                                                <span className="text-md font-bold mx-auto">
                                                    {m.marketPrice.toFixed(2)} TL
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className="mt-auto">
                                <div className="flex justify-between items-center w-full p-3">
                                    <span className="text-md font-bold">
                                        Toplam
                                    </span>
                                    <span className="text-md font-bold">
                                        {addedItems.reduce((acc, item) => acc + (item.marketPrice * item.Count), 0)?.toFixed(2)} TL
                                    </span>
                                </div>
                                <div className="flex justify-center items-center flex-wrap w-full p-3 gap-2">
                                    <Button className="!bg-blue-500 !text-white w-full md:w-1/3 ">
                                        Ödeme
                                        <ShoppingBag className="ml-2" size={15} />
                                    </Button>
                                    <Button className="!bg-red-500 !text-white w-full md:w-1/3"
                                        onClick={() => dispatch(clearBasket())}>
                                        Sepeti Temizle
                                        <Trash className="ml-2" size={15} />
                                    </Button>
                                </div>
                            </div>
                        </>

                    ) :
                        (
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <span className="text-3xl font-bold">
                                    Sepetiniz Boş
                                </span>
                                <span className="text-lg font-semibold mt-3">
                                    Sepetinize Ürünler Ekleyiniz
                                </span>
                            </div>
                        )
                }



            </div >
        </div >
    )

}