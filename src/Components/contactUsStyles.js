import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
    gridItem:{
      display:"flex",
      justifyContent:"center",
    },
    card:{
      margin:"10px"
    },
    cap:{
      fontWeight:700,
      marginBottom:'8px'    
    },
    pramukh:{
      marginBottom:'8px',
      fontSize:"18px",
      fontWeight:700,
    },
    icon:{
      display:"flex",
      verticalAlign:"middle",
    },

}));