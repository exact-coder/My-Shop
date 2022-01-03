import { Grid } from '@material-ui/core';
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react';
import {domain} from '../env';
import {Headline} from '../components/common/Headline';
import { SingleBrandName } from './common/SingleBrandName';

export const BrandsName = () => {
    const [brands, setBrands] = useState(null)
    useEffect(() => {
        const getBrands = async() =>{
            await axios({
                url:`${domain}/api/brandsname/`,
                method: 'GET',
            }).then(response =>{
                setBrands(response.data);
            })
        }
        getBrands()
    }, [])
    return (
        <Grid container spacing={1}>
            <Headline title={'All'} subtitle={'Brands'}/> 
            {
                brands?.map((item,i) => (
                    <Grid key={i} item xs={4} sm={3} md={2} lg={2}>
                        <SingleBrandName key={i} item={item}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}
