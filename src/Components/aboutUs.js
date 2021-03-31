import React from 'react';
import {Card, CardContent, Typography, Grid,Paper} from '@material-ui/core';
import {Phone, WhatsApp} from '@material-ui/icons';

import useStyles from './aboutUsStyles';

export const AboutUs = () => {

    const classes = useStyles();
    return (
            <h1>About us route is working</h1>
    );
}