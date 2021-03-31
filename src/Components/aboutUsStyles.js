import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      root:{
        flexGrow:1,
      },
      gridContainer:{
        display:"flex",
      },
      gridItem:{
        display:"flex",
        flexGrow:1,
        justifyContent:"center",
      },
      paper: {
        minHeight:"250px",
        marginTop:"30px",
        marginLeft:"10px",
        marginRight:"10px",
      },
      typographyStyles: {
        fontSize: "21px",
        fontWeight : 700 ,
        marginBottom: 12,
      },
      captions:{
        fontWeight:500,
        marginBottom: 12,
      },
      icon:{
        display: 'flex',
        verticalAlign:"middle",
        marginBottom: 12,
      },

}));