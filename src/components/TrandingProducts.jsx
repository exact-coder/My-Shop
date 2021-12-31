import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain } from '../env';
import {Headline} from '../components/common/Headline'
import { SingleProduct } from './common/SingleProduct';

export const TrandingProducts = () => {
    const [trandingProducts, setTrandingProducts] = useState(null);
    useEffect(() => {
        const getTrandingProducts = async () =>{
            await axios({
                url: `${domain}/api/trandingproduct/`,
                method: 'GET',
            }).then((response) => {
                setTrandingProducts(response.data)
            })
        }
        getTrandingProducts()
    }, [])
    return (
        <Grid container spacing={3}>
            <Headline title={"Trending"} subtitle={"Products"}/>
            {
                trandingProducts?.map((item,i) => (
                    <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <SingleProduct product={item?.products} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
