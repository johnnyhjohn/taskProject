import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    withRouter,
    useParams
} from "react-router-dom";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CardContent, Card, Paper, Typography, Button, CardActions, Divider } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';

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
    },
    cardHeader : {
        display: 'flex',
        alignItems: 'center'
    },
    cardContent : {
        padding: '20px'
    },
    cardActions : {
        background : '#f8f8f8'
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
                            <div className={`card-header ${classes.cardHeader}`}>
                                <Link to={ROUTES.PROJECT}>
                                    <Button><ArrowBackIcon /></Button>
                                </Link>
                                <Typography variant="h4" className={classes.panelTitle}>New Project</Typography>
                            </div>
                            <div className={classes.cardContent}>
                                {Object.keys( ProjectModel.PROJECT_LABELS ).map( key => (
                                    <TextField required id={key} label={ProjectModel.PROJECT_LABELS[key]} defaultValue={project[key]} />
                                ))}
                            </div>
                        </CardContent>
                        <Divider />
                        <CardActions className={classes.cardActions}>
                            <Button size="medium" color="primary">
                                CREATE
                            </Button>
                        </CardActions>
                    </Paper>
                </Card>
            </div>
        </div>
    );
}

export default withRouter(ProjectNew);