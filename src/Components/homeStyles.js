import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        flexGrow : 1,
        margin : 10,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
      },
      card: {
        maxWidth: 300,
      },
}));