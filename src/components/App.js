import React from 'react';
import InputForm from './InputForm';

// Material-UI
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    appContainer: {
        backgroundColor: '#f1ebeb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        minHeight: '100vh',
    },
    heading: {
        marginTop: 100,
    }
}));


const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.appContainer}>
            <Typography className={classes.heading} color='primary' variant='h4' component='h1' gutterBottom>
                  Search User Github Repos
            </Typography>
            <InputForm/>
        </div>
    );
}

export default App;
