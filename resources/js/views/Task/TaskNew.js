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


import TaskService from '../../services/taskService';
import * as TaskModel from '../../models/Task';

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

function TaskNew() {

    const classes = useStyles();
    const taskService = new TaskService();

    const [task, setTask] = useState(TaskModel.TASK_SCHEMA);
    const eventEmmiter = new EventEmmiter();

    const handleValue = (e, field) => {
        e.preventDefault();
        setTask({...task, [field] : e.target.value})
    }

    const createTask = async () => {
        // const createHandle = await taskService.createTask(task);
        // console.log(createHandle);
        // const serviceReturn = createHandle[0];
        // eventEmmiter.dispatch('showNotification', {message : serviceReturn.mensagem, status: serviceReturn.codigo })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Card className={classes.root}>
                    <Paper elevation={0} className={classes.paperContainer}>
                        <CardContent style={{padding:0}}>
                            <div className={`card-header ${classes.cardHeader}`}>
                                <Link to={ROUTES.TASK}>
                                    <Button><ArrowBackIcon /></Button>
                                </Link>
                                <Typography variant="h4" className={classes.panelTitle}>New Task</Typography>
                            </div>
                            <div className={classes.cardContent}>
                                {Object.keys( TaskModel.TASK_LABELS ).map( key => (
                                    <TextField value={task[key]} required id={key} label={TaskModel.TASK_LABELS[key]} onChange={(e) => { handleValue(e, key) }} />
                                ))}
                            </div>
                        </CardContent>
                        <Divider />
                        <CardActions className={classes.cardActions}>
                            <Button size="medium" color="primary" onClick={createTask}>CREATE</Button>
                        </CardActions>
                    </Paper>
                </Card>
            </div>
        </div>
    );
}

export default withRouter(TaskNew);