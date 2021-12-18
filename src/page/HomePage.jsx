import { Container } from '@material-ui/core';
import React from 'react';
import { BrandsName } from '../components/BrandsName';
import { CategoryPage } from '../components/CategoryPage';
import { CategoryProducts } from '../components/CategoryProducts';
import { MostViewProduct } from '../components/MostViewProduct';
import { Sliders } from '../components/Slider';
import { TrandingProducts } from '../components/TrandingProducts';

export const  HomePage = () => {
    return (
        <div>
            <Sliders/>
            <Container>
                <TrandingProducts/>
                <CategoryPage/>
                <MostViewProduct/>
                <CategoryProducts/>
                <BrandsName/>
            </Container>
        </div>
    )
}
