import React from 'react';
import {AppBar, Toolbar, IconButton, Button  } from '@material-ui/core';
import useStyles from './headerStyles';

//  Header of the page which will render the navbar and will have links for
//                 - Home
//                 - About 
//                 - Contact us 
//                 - committe members
export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Button color="inherit" className={classes.home}>Home</Button>
                <Button color="inherit" className={classes.committee}>Committee</Button>
                <Button color="inherit" className={classes.aboutUs}>About Us</Button>
                <Button color="inherit" className={classes.contactUs}>Contact Us</Button>                
            </Toolbar>
        </AppBar>
    )
};
