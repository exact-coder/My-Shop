import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {Headline} from './common/Headline'
import {domain} from '../env';
import { Grid } from '@material-ui/core';
import { SingleCategory } from './common/SingleCategory';

export const CategoryPage = () => {

    const [categoryNames, setCategoryNames] = useState(null);
    useEffect(() => {
        const getCategories = async ()=> {
            await axios({
                url: `${domain}/api/categories/`,
                method: 'GET',
            }).then(response => {
                setCategoryNames(response.data)
            }).catch(error => {
                console.log("Category Name: ", error);
            })
        }
        getCategories()
    }, []);

    return (
        <Grid container spacing={1}>
            <Headline title="All Category" subtitle="Products"/>
            {
                categoryNames?.map((item,i) => (
                    <Grid key={i} item xs={6} sm={3} md={2} lg={2} >
                        <SingleCategory item ={item}/>
                    </Grid>
                ))
            }
            
        </Grid>
    )
}
