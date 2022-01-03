import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {domain} from '../env'
import { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import {Headline} from '../components/common/Headline'
import { SingleBrandName } from '../components/common/SingleBrandName';
import {AllProducts} from '../components/common/AllProducts';

export const SearchResult = () => {
    const [result, setResult] = useState(null);
    const {q} = useParams();
    useEffect(() => {
        const getSearch = async () => {
            await axios({
                url : `${domain}/api/search/${q}/`,
                method: 'GET',
            }).then((response) =>{
                setResult(response.data);
            })
        };
        getSearch();
    }, [q]);
    return (
        <Container>
            <Typography variant='h5'>Search Result For : {q}</Typography>
            <Grid container direction='column'>
                {
                    result?.brand.length !== 0 && (<Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                            <Headline title="Brand" />
                            {
                                result?.brand?.map((item,i) => (
                                    <Grid item xs={4} sm={3} md={2} lg={2} key={i}>
                                        <SingleBrandName key={i} item={item}/>
                                    </Grid>
                                ))
                            }
                        </Grid>) 
                }
                {
                    result?.category.length !== 0 && (<Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                            <Headline title="Category" />
                            {
                                result?.category?.map((item,i) => (
                                    <Grid item xs={4} sm={3} md={2} lg={2} key={i}>
                                        <SingleBrandName key={i} item={item}/>
                                    </Grid>
                                ))
                            }
                        </Grid>) 
                }
                {
                    result?.products.length !== 0 && (<Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                            <Headline title="Products" />
                            <AllProducts products={result?.products} showAll={true} />
                        </Grid>) 
                }
                {result?.brand.length === 0 && result?.category.length === 0 && result?.products.length === 0 && <Typography variant='h2' style={{textAlign: 'center', margin: 'auto'}}>Result Not Found</Typography>

                }
            </Grid>
        </Container>
    )
}
