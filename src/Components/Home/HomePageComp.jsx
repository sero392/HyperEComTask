import { Grid } from "@mui/material";

export default function HomePageComp({ products }) {
    return (
        <>
            <Grid container gap={2} justifyContent="center" padding={2}>
                {
                    products.map((product, index) => {
                        return (
                            <Grid size={{ sm: 6, md: 4, lg: 2 }} key={product.productID}>
                                <div className="relative  shadow-md shadow-gray-500/50 w-[200px] min-h-[270px] rounded-lg overflow-hidden group">
                                    <div className="absolute inset-0 transition-all duration-300 group-hover:blur-sm">
                                        <img src={product?.productData?.productMainImage} alt={product?.productName} className="w-full rounded-t-md  object-contain" />
                                        <div className="flex justify-center items-center flex-col p-5">
                                            <span className="font-bold text-md text-blue-400">
                                                {product?.marketPrice?.toFixed(2)} TL
                                            </span>
                                        </div>
                                    </div>
                                    <div class="absolute inset-0 bg-transparent 
                                    text-white flex items-center justify-center text-md opacity-0 
                                    transition-opacity duration-300 group-hover:opacity-100 text-center">
                                        <span className="text-white p-3">
                                        {product?.productName}
                                        </span>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>

    )
}