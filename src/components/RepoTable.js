import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    tableContainer: {
        marginBottom: 20,
        marginTop: 20    },
    table: {
        minWidth: 650,
    },
    tableCell: {
        fontWeight: 600,
    }
});

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

export default function RepoTable(props) {
    const classes = useStyles();
    const repoDetails = props.reposDetails;

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} size='small' aria-label='a dense table'>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell}>Repos Name</TableCell>
                        <TableCell className={classes.tableCell} align='right'>Stars</TableCell>
                        <TableCell className={classes.tableCell} align='right'>Fork</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repoDetails.map((repo) => (
                        <TableRow key={repo.id}>
                            <TableCell component='th' scope='row'>
                                {repo.name}
                            </TableCell>
                            <TableCell align='right'>{repo.stargazers_count}</TableCell>
                            <TableCell align='right'>{repo.forks_count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}