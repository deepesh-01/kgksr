import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(2),
        },
        textAlign : "center",
      },
    tableCentre : {
      display : "flex",
      justifyContent : "center",
      margin:10,
    },
    table: {
      maxWidth : 450,
    },
    tablerowhead: {
      fontWeight : "bold",
      textAlign : "center",
    },
    tablerowcontent : {
      textAlign : "center",
    }

}));