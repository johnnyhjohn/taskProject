import React, {useEffect, useState} from 'react';
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import * as ROUTES from '../../constants/routes'

import ProjectList from './../../components/Project/ProjectList';
import ProjectService from '../../services/projectService';
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

function ProjectNew() {

    const classes = useStyles();

    console.log('project new component')
    const projectService = new ProjectService();

    const [project, setProject] = useState(ProjectModel.PROJECT_SCHEMA);
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Card className={classes.root}>
                    <Paper elevation={0} className={classes.paperContainer}>
                        <CardContent style={{padding:0}}>
                            <div className="card-header">
                                <Link to={ROUTES.PROJECT}>
                                    <ArrowBackIcon />
                                </Link>
                                <Typography variant="h4" className={classes.panelTitle}>New Project</Typography>
                            </div>
                            
                        </CardContent>
                    </Paper>
                </Card>
            </div>
        </div>
    );
}

export default withRouter(ProjectNew);