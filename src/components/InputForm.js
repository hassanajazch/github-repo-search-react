import React, { useState } from 'react';
import GithubService from '../service/Github';
import RepoTable from './RepoTable';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        marginTop: '20px',
    },
    progressBar: {
        position: 'absolute',
        marginLeft: '20%',
        marginTop: '10%',
    },
}));

/**
 * Form component for username input with submit button
 * @returns {JSX.Element}
 * @constructor
 */
const InputForm = () => {
    const classes = useStyles();
    const [username, setUserName] = useState('');
    const [progressBarStatus, setProgressBarStatus] = useState(false);
    const [reposDetail, setReposDetail] = useState([]);

    const handleSubmit = async () => {
        try {
            setProgressBarStatus(true);
            const repos = await GithubService.GetReposByUsername(username);

            setProgressBarStatus(false);
            setReposDetail(repos);
        } catch (err) {
            setProgressBarStatus(false);
            console.log(err);
        }
    }

    return (
        <div>
            <div className={classes.progressBar}>
                {progressBarStatus && <CircularProgress color='primary' />}
            </div>
            <div>
                <form className={classes.root} noValidate autoComplete='off'>
                    <Grid  container spacing={3}>
                        <Grid item xs={10}>
                            <TextField
                                id='standard-full-width'
                                label='Search Repo'
                                style={{ margin: 8 }}
                                placeholder='Username'
                                fullWidth
                                margin='normal'
                                value={username}
                                onChange={e => setUserName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button className={classes.button}
                                variant='contained'
                                color='primary'
                                onClick={handleSubmit}
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <RepoTable reposDetails={reposDetail}/>
            </div>
        </div>
    )
}

export default InputForm;