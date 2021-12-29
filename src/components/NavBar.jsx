import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

export const NavBar = () => {
    const history = useHistory()
    return (
        <AppBar position='sticky' style = {{background: 'var(--navbar)'}}>
            <Toolbar>
                <Typography onClick={() => history.push('/')} style={{cursor: 'pointer', fontSize: '22px', fontWeight: 'bold'}}>My Shop</Typography>
            </Toolbar>
        </AppBar>
    )
}
