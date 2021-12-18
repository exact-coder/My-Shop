import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

export const NavBar = () => {
    return (
        <AppBar position='sticky' style = {{background: 'var(--navbar)'}}>
            <Toolbar>
                <Typography>My Shop</Typography>
            </Toolbar>
        </AppBar>
    )
}
