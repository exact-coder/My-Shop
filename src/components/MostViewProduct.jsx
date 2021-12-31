import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Headline } from '../components/common/Headline';
import { SingleProduct } from '../components/common/SingleProduct';
import { domain } from '../env';

export const MostViewProduct = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const getMostViewProducts = async()=>{
            await axios({
                url: `${ domain}/api/mostviewproduct/`,
                method: 'GET',
            }).then((request) => {
                setProducts(request.data);
            })
        }
        getMostViewProducts()
    }, []);

    return (
        <Grid container spacing={3}>
            <Headline title={"Most Views"} subtitle={"Products"}/>
            {
                products?.map((item,i) => (
                    <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
                        <SingleProduct product={item?.product} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
