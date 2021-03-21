import React from 'react';
import {AppBar, Toolbar, IconButton, Button  } from '@material-ui/core';
import useStyles from './headerStyles';
import {Link} from "react-router-dom";

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
                <Link to='/'>
                    <Button color="inherit" className={classes.home}>Home</Button>
                </Link>
                <Link to='commitee'>
                    <Button color="inherit" className={classes.committee}>Committee</Button>
                </Link>
                <Link to='/aboutus'>
                <Button color="inherit" className={classes.aboutUs}>About Us</Button>
                </Link>
                <Link to='/contactus'>
                <Button color="inherit" className={classes.contactUs}>Contact Us</Button>                
                </Link>
            </Toolbar>
        </AppBar>
    )
};
