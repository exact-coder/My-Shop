import { AppBar, Badge, Button, Card, ClickAwayListener, Grid, IconButton, InputBase, MenuItem, Paper, Toolbar, Typography } from '@material-ui/core'
import { AccountCircleRounded, Search, ShoppingCart } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../state/stateProvider'

export const NavBar = () => {
    // eslint-disable-next-line no-empty-pattern
    const [state,{}] = useStateValue();
    const history = useHistory();
    let [showmenu, setShowmenu] = useState(false)
    const [text, setText] = useState('');
    const search = () =>{
        history.push(`/search-${text}`);
    }
    const logoutNow  = ()=> {
        window.localStorage.removeItem('token');
        window.location.href = '/';
        // window.localStorage.clear();
    }
    return (
        <AppBar position='sticky' style = {{background: 'var(--navbar)'}}>
            <Toolbar>
                <Grid container>
                    <Typography onClick={() => history.push('/')} style={{cursor: 'pointer', fontSize: '22px', fontWeight: 'bold'}}>My Shop</Typography>
                    <Paper style={{margin: '0 25px'}}>
                        <InputBase  value={text} onChange={(e) => {setText(e.target.value)}} placeholder='Search....' style={{padding: '0px 15px',color:'var(--orange)'}} />
                        <IconButton disabled={text.length <= 0 ? true: false} style={{color: 'var(--orange)',}} onClick={search}>
                            <Search/>
                        </IconButton>
                    </Paper>
                </Grid>
                {
                    state.profile === null ? <Button onClick={()=> {history.push('login')}} style={{color:'var(--white)',}}>Login</Button> 
                    : 
                    <>
                    <IconButton onClick={()=> history.push('/orders')} style={{color:'var(--white)',}}>
                    <Badge color='secondary' badgeContent={'0'}>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <IconButton style={{color: 'var(--white)'}} onClick={()=> setShowmenu(showmenu === false ? showmenu = true : showmenu = false)}>
                    <AccountCircleRounded/>
                </IconButton>
                {showmenu && <ClickAwayListener onClickAway={()=> setShowmenu(false)}><Card style={{position: 'fixed',top:'48px', right: '20px',background: 'var(--navbar)',color: 'var(--white)'}}>
                    <MenuItem onClick={()=> history.push(`/profile-${state.profile?.username}`)}>Profile</MenuItem>
                    <MenuItem onClick={logoutNow}>Logout</MenuItem>
                </Card></ClickAwayListener>}
                </>
                }
                

                

            </Toolbar>
        </AppBar>
    )
}
