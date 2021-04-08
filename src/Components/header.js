import React from 'react';
import {AppBar, Toolbar,Menu, MenuItem, Button, useMediaQuery  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './headerStyles';
import {Link} from "react-router-dom";

//  Header of the page which will render the navbar and will have links for
//                 - Home
//                 - About 
//                 - Contact us 
//                 - committe members
export const Header = () => {
    const classes = useStyles();
    // For responsive appBar 
    const isMobile = useMediaQuery("(min-width:600px)");
    console.log("isMobile : ",isMobile);

    // Hook for menuItem
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className={classes.root}>
        {(isMobile) ?
        <Toolbar>
        <Link to='/'>
            <Button color="inherit" className={classes.home}>Home</Button>
        </Link>
        <Link to='/commitee'>
            <Button color="inherit" className={classes.committee}>Committee</Button>
        </Link>
        <Link to='/contactus'>
            <Button color="inherit" className={classes.contactUs}>Contact Us</Button>                
        </Link>
        <Link to='/aboutus'>
            <Button color="inherit" className={classes.aboutUs}>About Us</Button>
        </Link>
        </Toolbar>
        
        :
        <div>
            <Button onClick={handleClick} >
                <MenuIcon/>
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <Link to='/'>
                <MenuItem onClick={handleClose}>HOME</MenuItem>
                </Link>
                <Link to="/commitee">
                <MenuItem onClick={handleClose}>COMMITTEE</MenuItem>
                </Link>
                <Link to="/contactus">
                <MenuItem onClick={handleClose}>CONATCT US</MenuItem>
                </Link>
                <Link to="/aboutus">
                <MenuItem onClick={handleClose}>ABOUT US</MenuItem>
                </Link>
            </Menu>
        </div>
        }
        </AppBar>

    )
};
