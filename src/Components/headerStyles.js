import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

    root: {[theme.breakpoints.down('xs')]:{
            flexGrow:1,
        }
      },
    home : {
        marginRight : '10px',
        color : grey[50],
    },
    committee : {
        marginLeft : '10px',
        marginRight : '10px',
        color : grey[50],
    },
    contactUs : {
        marginLeft : '10px',
        marginRight : '10px',
        color : grey[50],
    },
    aboutUs : {
        marginLeft : '10px',
        marginRight : '10px',
        color : grey[50],
    } 

}));