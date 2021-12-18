import { Box, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain } from '../env';
import { AllProducts } from './common/AllProducts';
import { Headline } from './common/Headline';

export const CategoryProducts = () => {
    const [categoryProducts, setCategoryProducts] = useState(null);
    useEffect(() => {
        const getCategoryProducts =async ()=> {
            await axios({
                url: `${domain}/api/categoryproducts/`,
                method: 'GET',
            }).then(response => {
                setCategoryProducts(response.data); 
            }).catch(error => {
                console.log("categoryproducts", error);
            });
        }
        getCategoryProducts()
        
    }, [])
    return (
        <Grid container  >
            {
                categoryProducts?.map((item,i) => (
                    <Box key={i} container="div">
                        <>
                            <Headline title={item?.title} subtitle={"Products"}/>
                            <AllProducts products={item?.products}/>
                        </>
                    </Box>
                ))
            }
        </Grid>
    )
}
