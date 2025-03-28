import { AppBar, Backdrop, Box, CircularProgress, Drawer, styled, TextField, Toolbar } from "@mui/material";
import FooterComp from "./Footer/FooterComp";
import { useState } from "react";
import HeaderComp from "./Header/HeaderComp";
import { useDispatch, useSelector } from "react-redux";
import { toggleBasket } from "../../Features/BasketSlice";
import BasketComp from "./Basket/BasketComp";



export default function LayoutComp({ Children }) {
    const dispatch = useDispatch();
    const isBasketOpen = useSelector(state => state.basket.isBasketOpen);

    //Şimdilik loading buradan yönetiliyor başka sayfa gelirse redux'a alınabilir.
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <HeaderComp />
            <div className="relative mt-3">
                <Backdrop
                    sx={{ color: '#fff', position: 'absolute', zIndex: 9999 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Children setLoading={setLoading} />
            </div>
            <Drawer open={isBasketOpen} anchor="right"
                onClose={() => dispatch(toggleBasket(false))}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "600px",
                        "@media (max-width:600px)": {
                            width: "300px",
                        },
                    },
                }}>
                    <Box sx={{padding:3, height:"100%"}}>
                        <BasketComp />
                    </Box>
            </Drawer>
            <FooterComp />
        </div>
    )
}