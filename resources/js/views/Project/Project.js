import React, {useEffect, useState} from 'react';
import ProjectList from './../../components/Project/ProjectList';
import ProjectService from '../../services/projectService';
import {
    BrowserRouter as Router,
    Link,
    Route,
    withRouter,
    useParams
} from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as ROUTES from '../../constants/routes'
import * as ProjectModel from '../../models/Project';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width : '90%',
      '& > *': {
        margin: 0
      },
    },
    paperContainer : {
        width: '100%' 
    },
    panelTitle : {
        width: '85%',
        display: 'inline-block'
    }
  }));

function Project() {

    const classes = useStyles();

    const projectService = new ProjectService();
    let isProjectLoaded = false;
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        projectService.getProjects().then((response) => {
            if(response[0].codigo === 'SUCCESS') {
                setProjects((response[0].objeto.projects)) 
            }

            if(isProjectLoaded === false) {
                isProjectLoaded = true;
            }
        })
    }, [isProjectLoaded])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Card className={classes.root}>
                    <Paper elevation={0} className={classes.paperContainer}>
                        <CardContent style={{padding:0}}>
                            <div className="card-header">
                                <Typography variant="h4" className={classes.panelTitle}>Project Component</Typography>
                                <Link to={ROUTES.PROJECT_CREATE}>
                                    <Button>NEW PROJECT</Button>
                                </Link>
                            </div>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {Object.keys( ProjectModel.PROJECT_LABELS ).map( key => 
                                                <TableCell key={`tablehead-field-${key}`}>{ProjectModel.PROJECT_LABELS[key]}</TableCell>
                                            )}
                                            <TableCell >Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <ProjectList projectList={projects}></ProjectList>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Paper>
                </Card>
            </div>
        </div>
    );
}

export default withRouter(Project);