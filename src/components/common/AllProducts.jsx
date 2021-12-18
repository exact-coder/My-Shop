import { Grid } from '@material-ui/core'
import React from 'react'
import { SingleProduct } from './SingleProduct'

export const AllProducts = ({products}) => {
    return (
        <Grid container>
            {
                products?.map((product, i) => (
                    <Grid item md={2} sm={4} key={i}>
                        <SingleProduct product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}
