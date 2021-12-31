import { Container, Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AllProducts } from '../components/common/AllProducts'
import { domain } from '../env'

export const SingleBrandProducts = () => {
    const {id} = useParams();
    const [brand, setBrand] = useState(null);
    useEffect(() => {
        const getSingleBrand = async ()=> {
            await axios({
                url: `${domain}/api/singlebrand/${id}/`,
                method: 'GET'
            }).then((response) => {
                setBrand(response.data[0]);
            })
        }
        getSingleBrand()
    }, [id]);
    return (
        <Container>
            <Grid  container direction='column' alignItems='center'>
                <Typography style={{margin: '15px',color: 'var(--blue)', fontWeight: 'bold'}} variant='h3'>{brand?.title}</Typography>
                <Typography style={{marginBottom: '15px', color: 'var(--navbar)'}} variant='p'>{brand?.details}</Typography>
                {brand?.logo?<img style={{width: '100%', borderRadius: '15px', height: '500px', padding: '10px', boxShadow: '10px 10px 20px #000000',marginBottom: '2.5rem'}} alt={brand?.title} src={brand?.logo}/>: null}
                <AllProducts products={brand?.products} showAll= {true}/>
            </Grid>
        </Container>
    )
}
