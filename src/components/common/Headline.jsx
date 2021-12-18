import { Box, Grid } from '@material-ui/core'
import React from 'react'

export const Headline = ({title, subtitle}) => {
    return (
        <Grid container style={{justifyContent: 'center', borderBottom: '3px solid var(--blue)', marginTop: '30px', marginBottom: '25px',}}>
            <Box style={{fontWeight: 'bold', 
            padding: '10px',fontSize: '25px', textTransform: 'uppercase', color: 'var(--headline1)',}}>{title}</Box>
            <Box style={{fontWeight: 'bold', 
            padding: '10px',fontSize: '25px', textTransform: 'uppercase', color: 'var(--headline2)'}}>{subtitle}</Box>
        </Grid>
    )
}
