import { AppBar, Box,  TextField,  Toolbar } from "@mui/material";

export default function LayoutComp({ Children }) {
    return (
        <div>
            <AppBar position="static" className="!bg-blue-50">
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="./Assets/hyper_logo.png" alt="logo" width={150} height={50} />
                    </Box>
                </Toolbar>
            </AppBar>
            <Children />
        </div>
    )
}