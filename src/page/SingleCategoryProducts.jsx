import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AllProducts } from '../components/common/AllProducts';
import { domain } from '../env';

export const SingleCategoryProducts = () => {
    const [category, setCategory] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        const getproducts = async () =>{
            await axios({
                url: `${domain}/api/singlecategories/${id}/`,
                method: 'GET',
            }).then(response => {
                setCategory(response.data[0]);
            })
        }
        getproducts()
    }, [id])
    return (
        <Container>
            <Grid  container direction='column' alignItems='center'>
                <Typography style={{margin: '15px',color: 'var(--blue)', fontWeight: 'bold'}} variant='h3'>{category?.title}</Typography>
                <Typography style={{marginBottom: '15px', color: 'var(--navbar)'}} variant='p'>{category?.details}</Typography>
                {category?.image?<img style={{width: '100%', borderRadius: '15px', height: '500px', padding: '10px', boxShadow: '10px 10px 20px #000000',marginBottom: '2.5rem'}} alt={category?.title} src={category?.image}/>: null}
                <AllProducts products={category?.products} showAll= {true}/>
            </Grid>
        </Container>
    )
}
