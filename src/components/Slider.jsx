import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain } from '../env';
import Carousel from 'react-material-ui-carousel'
import { SliderItem } from './common/SliderItem';

export const Sliders = () => {
    const [slider, setSlider] = useState(null);
    useEffect(() => {
        const getSlider = async() =>{
            await axios({
                url: `${domain}/api/sliders/`,
                method: "GET",
            }).then((response) => {
                setSlider(response.data)
            })
        }
        getSlider()
    }, [])
    return (
        <Carousel
            interval={'3500'}
            autoPlay = 'true'
            swipe = 'true'
            cycleNavigation = 'true'
            fullHeightHover = 'true'
            indicators = 'true'
            navButtonsAlwaysVisible ='true'
            animation='slide'
            style={{transitiontTimingFunction: 'ease-in-out', transitionDelay: '4s',}}
        >
            {
                slider?.map((item,i)=> 
                <SliderItem key={i} item={item}/>
                )
            }
        </Carousel>
    )
}
