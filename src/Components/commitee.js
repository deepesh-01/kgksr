import React, {Fragment} from 'react';

import {Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper, Grid } from '@material-ui/core';

import useStyles from './commiteeStyles';

export const Commitee = () => {
    const classes = useStyles();

    const createData = (pad, names) => {
        return {pad, names};
    }

    const rows = [
        createData('પ્રમુખ',['ચંદ્રેશ દેવેન્દ્રભાઈ ટાંક']),
        createData('કાર્યકારી પ્રમુખ',['પયંક ભુપેન્દ્રભાઈ ચૌહાણ']),
        createData('સલાહકાર પ્રમુખ',['મુંજાલ જીતેન્દ્રભાઈ ચાવડા']),
        createData('સલાહકાર સભ્ય',['ચેતન હિમ્મતભાઈ સોલંકી', 'વૈભવ નરેન્દ્રભાઈ ચૌહાણ', 'જેશલ ઈશ્વરલાલભાઈ પરમાર','પ્રદીપ બાબુલાલભાઈ જેઠવા', 'અશ્વિન ધીરજ ભાઈ રાઠોડ','અરુણા તુષારભાઈ ચૌહાણ']),
        createData('મહામંત્રી',['નીલેશ દિલીપભાઈ ચૌહાણ']),
        createData('સંરક્ષક',['શૈલેશ મોહનભાઈ ચાવડા', 'શશાંક બાબુલાલભાઈ રાઠોડ', 'મયુર મુકેશભાઈ રાઠોડ']),
        createData('સહમંત્રી',['કપિલ હેમરાજભાઈ પરમાર', 'પાર્થ રવિભાઈ ચાવડા']),
        createData('ખાજાંચી',['તન્વી જેશાલભાઈ પરમાર', 'ધર્મિષ્ઠા અશ્વિનભાઈ રાઠોડ']),
        createData('ખેલ મંત્રી',['અંકિત અનિલભાઈ સાવરિયા', 'જયતિ તુષારભાઈ ચૌહાણ','ભાવિન હિંમતભાઈ વાઘેલા']),
        createData('સંસ્કૃતિક મંત્રી',['પ્રિયંકા અનમોલભાઈ ટાંક', 'ખ્યાતી રાજેશભાઈ પરમાર','ઈશા શશાંકભાઈ રાઠોડ']),
        createData('શૈક્ષણિક મંત્રી',['તૃષ્ણા પ્રદીપભાઈ જેઠવા', 'ભૂમિકા જતીનભાઈ ટાંક','આયુષી વૈભવભાઈ ચૌહાણ']),
        createData('પ્રચાર-પ્રસાર મંત્રી',['અનમોલ મહેન્દ્રભાઈ ટાંક', 'તુષાર રાજેશભાઈ સોલંકી','વીની મયુરભાઈ રાઠોડ']),
        createData('કાર્યવાહક સભ્ય',['અમન ભરતભાઈ સાવરિયા', 'રાહત હરીશભાઈ ટાંક','જતીન તરુણભાઈ ટાંક','પ્રગતિ રાજેશભાઈ પરમાર','સિદ્ધાર્થ અનિલભાઈ સાવરિયા','રાહુલ પ્રવીણભાઈ જેઠવા','મનન હેમેન્દ્રભાઈ રાઠોડ','નિધિ દિલીપભાઈ ચૌહાણ','શુભમ હિમ્મતલાલભાઈ વાઘેલા']),
    ]
    return (
        <div className={classes.root}>
         <Grid container spacing={2} >
             {/* Ghatak Starts */}
             <Grid item xs={12} md={4}>
           <h2>રાયગડ ઘટક</h2>
            <div className={classes.tableCentre}>
            <TableContainer component={Paper} className={classes.table}>
                <Table  size="small" aria-lable="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tablerowhead}>પદ</TableCell>
                            <TableCell className={classes.tablerowhead}>નામ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <Fragment> 
                            <TableRow>
                                <TableCell className={classes.tablerowcontent} rowSpan={row.names.length+1}>{row.pad}</TableCell>
                            </TableRow>
                            {row.names.map((name) => (
                                <TableRow>
                                    <TableCell className={classes.tablerowcontent}> {name}  </TableCell>
                                </TableRow>
                            ))}
                        </Fragment>
                        ))}  
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
           </Grid>
             {/* Ghatak Ends */}
             {/* Yuva Mandal starts  */}
           <Grid item xs={12} md={4}>
           <h2>યુવા મંડળ</h2>
            <div className={classes.tableCentre}>
            <TableContainer component={Paper} className={classes.table}>
                <Table  size="small" aria-lable="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tablerowhead}>પદ</TableCell>
                            <TableCell className={classes.tablerowhead}>નામ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <Fragment> 
                            <TableRow>
                                <TableCell className={classes.tablerowcontent} rowSpan={row.names.length+1}>{row.pad}</TableCell>
                            </TableRow>
                            {row.names.map((name) => (
                                <TableRow>
                                    <TableCell className={classes.tablerowcontent}> {name}  </TableCell>
                                </TableRow>
                            ))}
                        </Fragment>
                        ))}  
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
           </Grid>
        {/* Yuva Mandal Ends  */}
        {/* Mahila Mandal Starts */}
        <Grid item xs={12} md={4}>
           <h2>મહિલા મંડળ</h2>
            <div className={classes.tableCentre}>
            <TableContainer component={Paper} className={classes.table}>
                <Table  size="small" aria-lable="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tablerowhead}>પદ</TableCell>
                            <TableCell className={classes.tablerowhead}>નામ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <Fragment> 
                            <TableRow>
                                <TableCell className={classes.tablerowcontent} rowSpan={row.names.length+1}>{row.pad}</TableCell>
                            </TableRow>
                            {row.names.map((name) => (
                                <TableRow>
                                    <TableCell className={classes.tablerowcontent}> {name}  </TableCell>
                                </TableRow>
                            ))}
                        </Fragment>
                        ))}  
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
           </Grid>
            {/* Mahila Mandal Ends */}
         </Grid>
        </div>

    );
}