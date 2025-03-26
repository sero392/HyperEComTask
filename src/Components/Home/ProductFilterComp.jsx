import { Box, TextField } from "@mui/material";
import SelectBoxComp from "../Common/SelectBox/SelectBoxComp";
import { useRef } from "react";
import { ArrowDown, Camera } from 'lucide-solid';

export default function ProductFilterComp() {
    const orderList = useRef([
        { id: 1, name: 'En Yeniler' },
        { id: 2, name: 'En Eskiler' },
        { id: 3, name: 'En Pahalılar' },
        { id: 4, name: 'En Ucuzlar' },
    ]);
    return (
        <Box sx={{ paddingX: 17, paddingTop: 5, justifyContent: 'space-between', display: 'flex' }}>
            <div>
                <TextField variant="outlined" size="small" label="Ürün Ara" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}>
                </TextField>
            </div>
            <div>
                <SelectBoxComp className="py-2 px-6 pr-10 rounded-lg
            appearance-none font-bold shadow-lg shadow-yellow-400/50
             !text-themeTextColor focus:outline-none focus:ring-4 focus:ring-themeSecondaryColor 
             focus:border-themeSecondaryColor"

                    optionList={orderList.current}
                    triggerOnMount={false}
                    dropDownIcon={
                        <ArrowDown className="absolute top-2 right-2  text-gray-500 pointer-events-none" />
                    }
                >

                </SelectBoxComp>
            </div>
        </Box>
    )
}