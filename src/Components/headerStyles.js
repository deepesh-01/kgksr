import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
    home : {
        marginRight : '10px',
    },
    committee : {
        marginLeft : '10px',
        marginRight : '10px',
    },
    contactUs : {
        marginLeft : '10px',
        marginRight : '10px',
    },
    aboutUs : {
        marginLeft : '10px',
        marginRight : '10px',
    } 

}));