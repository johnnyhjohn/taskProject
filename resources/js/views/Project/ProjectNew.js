import React, {useEffect, useState,setState} from 'react';
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

import EventEmmiter from '../../services/eventEmiiter'

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
        display: 'inline-block',
        opacity : .75
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
    const projectService = new ProjectService();

    const [project, setProject] = useState(ProjectModel.PROJECT_SCHEMA);
    const eventEmmiter = new EventEmmiter();

    const handleValue = (e, field) => {
        e.preventDefault();
        setProject({...project, [field] : e.target.value})
    }

    const createProject = async () => {

        const createHandle = await projectService.createProject(project);
        console.log(createHandle);
        const serviceReturn = createHandle[0];
        eventEmmiter.dispatch('showNotification', {message : serviceReturn.mensagem, status: serviceReturn.codigo })
    }

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
                                    <TextField value={project[key]} required id={key} label={ProjectModel.PROJECT_LABELS[key]} onChange={(e) => { handleValue(e, key) }} />
                                ))}
                            </div>
                        </CardContent>
                        <Divider />
                        <CardActions className={classes.cardActions}>
                            <Button size="medium" color="primary" onClick={createProject}>CREATE</Button>
                        </CardActions>
                    </Paper>
                </Card>
            </div>
        </div>
    );
}

export default withRouter(ProjectNew);