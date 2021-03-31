import React from 'react';
import {Grid,Paper, Card, CardContent, Typography} from '@material-ui/core';
import useStyles from './contactUsStyles';
import {Phone, WhatsApp} from '@material-ui/icons';

export const ContactUs = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid className={classes.gridItem} item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.cap} color="textSecondary" gutterBottom>
                    રાયગઢ-ઘટક
                  </Typography>
                  <Typography className={classes.pramukh}>
                    શ્રી હેમંત નિર્ભયરામભાઈ ચાવડા
                  </Typography>
                  <Typography className={classes.cap} color="textSecondary">
                  પ્રમુખ
                  </Typography>
                  <Typography className={classes.icon}>
                    <Phone/> {'\u00A0'} +91-123-456-7890
                  </Typography>
                  <Typography className={classes.icon}>
                    <WhatsApp/> {'\u00A0'} +91-123-456-7890
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.cap} color="textSecondary" gutterBottom>
                    રાયગઢ-ઘટક
                  </Typography>
                  <Typography className={classes.pramukh}>
                    શ્રી હેમંત નિર્ભયરામભાઈ ચાવડા
                  </Typography>
                  <Typography className={classes.cap} color="textSecondary">
                  પ્રમુખ
                  </Typography>
                  <Typography className={classes.icon}>
                    <Phone/> {'\u00A0'} +91-123-456-7890
                  </Typography>
                  <Typography className={classes.icon}>
                    <WhatsApp/> {'\u00A0'} +91-123-456-7890
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid className={classes.gridItem} item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.cap} color="textSecondary" gutterBottom>
                    રાયગઢ-ઘટક
                  </Typography>
                  <Typography className={classes.pramukh}>
                    શ્રી હેમંત નિર્ભયરામભાઈ ચાવડા
                  </Typography>
                  <Typography className={classes.cap} color="textSecondary">
                  પ્રમુખ
                  </Typography>
                  <Typography className={classes.icon}>
                    <Phone/> {'\u00A0'} +91-123-456-7890
                  </Typography>
                  <Typography className={classes.icon}>
                    <WhatsApp/> {'\u00A0'} +91-123-456-7890
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
    );
}