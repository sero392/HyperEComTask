import { Badge, Divider, IconButton, TextField } from "@mui/material";
import { Facebook, FlagIcon, Home, Instagram, Search, ShoppingBasket, Twitter, Youtube } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "../../../Features/BasketSlice";

export default function HeaderComp() {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.basketItems);

    return (
        <div>
            <div className="hidden sm:flex  w-full grid grid-cols-2 gap-1">
                <div className="flex flex-wrap gap-3 
               w-full items-center px-20 py-3 font-bold text-sm font-main">
                    <span>
                        Your Orders
                    </span>
                    <span>
                        Account
                    </span>
                    <span>
                        Streamers
                    </span>
                    <span>
                        Add Item To MarketPlace
                    </span>
                </div>

                <div className="flex flex-wrap justify-center
                 w-full items-center px-20 py-3 font-bold text-sm font-main">
                    <IconButton>
                        <Instagram size={18} />
                    </IconButton>
                    <IconButton>
                        <Facebook size={18} />
                    </IconButton>
                    <IconButton>
                        <Twitter size={18} />
                    </IconButton>
                    <IconButton>
                        <Youtube size={18} />
                    </IconButton>

                </div>
            </div>
            <Divider></Divider>
            <div
                className="w-full
    z-40
    navbar-container grid  grid-cols-[50%_50%] md:grid-cols-[25%_75%]  gap-1 bg-zinc-50 text-zinc-50 shadow-lg shadow-blue-400/20 px-10 md:px-20"
            >
                <div className="navbar-left p-4">
                    <span className=" text-blue-900">
                        <img src="./Assets/hyper_logo.png" alt="logo" className="w-28  md:w-36 lg:w-44 xl:w-52 h-auto object-contain" />
                    </span>
                </div>
                <div className="navbar-right pl-10 ml-auto flex w-full">
                    <div className="hidden sm:flex justify-center items-center md:w-1/2 lg:w-1/3">
                        <TextField variant="outlined"
                            size="small"
                            label="Search For Product"
                            color="primary" fullWidth={true}
                            slotProps={{
                                input: {
                                    endAdornment: <Search size={18} />,
                                    className: "!rounded-full"
                                }
                            }}
                        >
                        </TextField>
                    </div>
                    <ul className="navbar-menu flex flex-wrap h-full ml-auto">
                        <li className="w-24 flex justify-center items-center text-blue-900">
                            <IconButton onClick={() => dispatch(toggleBasket(true))}>
                                <Badge showZero badgeContent={basketItems?.length} color="primary">
                                    <ShoppingBasket />
                                </Badge>
                            </IconButton>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )
}