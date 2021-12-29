import { Button, Grid, Typography } from '@material-ui/core'
import { DoubleArrowSharp } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { SingleProduct } from './SingleProduct'

export const AllProducts = ({products, showAll = false, categorytitle, categoryid}) => {
    const history = useHistory();
    const showCategoryProducts = () => {
        history.push(`category-${categorytitle}-${categoryid}`)
    }
    return (
        <Grid container spacing={3}>
            {
                products?.map((product, i) => (
                    <>
                        {showAll ? (
                            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={i}>
                            <SingleProduct product={product}/>
                            </Grid>
                        ) : (
                            <>
                                {i <= 7 && (
                                    <Grid key={i} item  xl={2} lg={3} md={4} sm={6} xs={12}>
                                        <SingleProduct product={product}/>
                                    </Grid>
                                )}
                            </>
                        )}
                    </>
                ))
            }
            {
                (products?.length >=7 && !showAll) &&
                <Grid item md={2} sm={4} style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center'}}>
                    <Button>
                        <Typography style={{color: 'var(--orange)'}} onClick={showCategoryProducts}>See More</Typography>
                        <DoubleArrowSharp style={{color: 'var(--orange)'}}/>
                    </Button>
                </Grid>
            }
        </Grid>
    )
}
