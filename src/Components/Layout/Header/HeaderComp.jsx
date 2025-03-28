import { Badge, Divider, IconButton, TextField } from "@mui/material";
import { ArrowDown, ChevronDown, Facebook, FlagIcon, Home, Instagram, Search, ShoppingBasket, Twitter, Youtube } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "../../../Features/BasketSlice";
import SelectBoxComp from "../../Common/SelectBox/SelectBoxComp";
import { setSelectedLang } from "../../../Features/GlobalSlice";
import useLocalize from "../../../Commons/CustomHooks/LocalizeHooks";

export default function HeaderComp() {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.basketItems);
    const languageData = useSelector(state => state.global.languageData);
    const selectedLang = useSelector(state => state.global.selectedLang);
    const str_your_orders = useLocalize(selectedLang,'str_your_orders');
    const str_account = useLocalize(selectedLang,'str_account');
    const str_streamers = useLocalize(selectedLang,'str_streamers');
    const str_add_item_to_market_place = useLocalize(selectedLang,'str_add_item_to_market_place');
    const str_search_for_product = useLocalize(selectedLang,'str_search_for_product');

    const languages = languageData?.map((m) => ({
        Id: m.LanguageId,
        Text: m.LanguageName
    }));

    const changeLanguage = (value) => {
        //Seçili dil ataması
        dispatch(setSelectedLang(value));
    }

    return (
        <div>
            <div className="hidden sm:flex  w-full grid grid-cols-2 gap-1">
                <div className="flex flex-wrap gap-3 
               w-full items-center px-20 py-3 font-bold text-sm font-main">
                    <span>
                       {str_your_orders}
                    </span>
                    <span>
                        {str_account}
                    </span>
                    <span>
                        {str_streamers}
                    </span>
                    <span>
                        {str_add_item_to_market_place}
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
    navbar-container grid  grid-cols-[30%_70%]  gap-1 bg-zinc-50 text-zinc-50 shadow-lg shadow-blue-400/20 px-10 md:px-20 py-5 md:py-0"
            >
                <div className="navbar-left p-0 sm:p-4">
                    <img src="./Assets/hyper_logo.png" alt="logo" className="w-24  md:w-36 lg:w-44 xl:w-52 h-full object-contain" />
                </div>
                <div className="navbar-right pl-10 ml-auto flex w-full">
                    <div className="hidden sm:flex justify-center items-center md:w-1/2 lg:w-1/3">
                        <TextField variant="outlined"
                            size="small"
                            label={str_search_for_product}
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
                    <ul className="navbar-menu grid grid-cols-2 h-full ml-auto gap-2 ">
                        <li className=" flex justify-center items-center text-blue-900">
                            <IconButton onClick={() => dispatch(toggleBasket(true))}>
                                <Badge showZero badgeContent={basketItems?.length} color="primary">
                                    <ShoppingBasket />
                                </Badge>
                            </IconButton>
                        </li>
                        <li className=" flex justify-center items-center text-blue-900">
                            <SelectBoxComp
                                className="
                                      w-[80px] 
            py-2 px-1
            rounded-md
            font-bold shadow-lg shadow-blue-400/50
            text-xs
            ring-2 ring-blue-50
             focus:outline-none focus:ring-4 focus:ring-blue-100 
                           "
                                triggerOnMount={false}
                                optionList={languages}
                                onChange={(value) => changeLanguage(value)}

                            />
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )
}