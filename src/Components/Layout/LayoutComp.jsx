import { AppBar, Backdrop, Box, CircularProgress, TextField, Toolbar } from "@mui/material";
import FooterComp from "./Footer/FooterComp";
import {  useState } from "react";

export default function LayoutComp({ Children }) {
    //Şimdilik loading buradan yönetiliyor başka sayfa gelirse redux'a alınabilir.
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <AppBar position="static" className="!bg-blue-50">
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="./Assets/hyper_logo.png" alt="logo" width={150} height={50} />
                    </Box>
                </Toolbar>
            </AppBar>
            <div className="relative mt-3">
                <Backdrop
                    sx={{ color: '#fff', position: 'absolute',zIndex: 9999 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Children setLoading={setLoading} />
            </div>
            <FooterComp />
        </div>
    )
}