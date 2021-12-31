import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

export const SliderItem = ({item}) => {
    return (
        <Paper style={{
            height: '600px',
            width: '100%', 
            backgroundColor:'var(--blue)',
            backgroundImage: `url(${item?.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 600px',
            }}>
            <Grid style={{position: 'absolute',left: '40%', top: '50%',transform: 'translate(-50%, -50%)'}}>
                <Typography style={{
                    fontSize: '40px',
                    color:'var(--white)',
                    fontWeight: '900',
                    textTransform:'uppercase',zIndex: '99',
                }}>{item?.name}</Typography>
                <Typography 
                style={{color:'var(--white)',
                fontSize:'14px',zIndex: '99',
                }}>{item?.details}</Typography>
                <Button size='large' variant='contained'  style={{color:'var(--white)',marginTop: '10px',fontSize: '18px',backgroundColor: 'var(--orange)',zIndex: '99',fontWeight: 'bold'}}>Learn More</Button>
            </Grid>
        </Paper>
    )
}
