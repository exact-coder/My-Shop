import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'

export const SingleProduct = ({product}) => {
    return (
        <Card>
            <CardActionArea>
            <CardMedia component={'img'} width={'200px'} height={'250px'} image={product?.image} style={{objectFit: 'contain', }}/>
            </CardActionArea>
            <CardActionArea>
                <CardContent>
                    <Typography style={{color: 'var(--navbar)',clear: 'both', display: 'inline-block',overflow: 'hidden', 
                    textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold',whiteSpace: 'nowrap'}}>
                        {product?.title}
                    </Typography>
                    <Typography align='left'>
                        {product?.oldprice && (
                            <Box component={'span'} style={{fontWeight: 'bold', fontSize: 'large', textDecoration: 'line-through',textAlign: 'center', color: 'var(--orange)', padding: '5px',}}>
                                ৳{product?.oldprice}Tk  
                            </Box>
                        )}
                        <Box component={'span'} style={{fontWeight: 'bold', fontSize: 'large',color: 'var(--navbar)', 
                        textAlign: 'center',padding: '5px',}}>
                                &nbsp;৳{product?.price}Tk
                            </Box>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{justifyContent: 'center'}}>
                <Button endIcon={<AddShoppingCart/>} variant='outlined' size='large' style={{color: 'var(--orange)', textAlign: 'center', outlineColor: 'var(--orange)',borderColor: 'var(--orange)'}}>Add To Cart </Button>
            </CardActions>
        </Card>
    )
}
