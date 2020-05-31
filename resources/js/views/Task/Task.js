import React, {useEffect, useState} from 'react';
import TaskList from './../../components/Task/TaskList';
import TaskService from '../../services/taskService';

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
        display: 'inline-block'
    }
  }));

function Task() {
    console.log('task component');
    const classes = useStyles();
    const taskService = new TaskService();
    let isTaskLoaded = false;
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        taskService.getTasks().then((response) => {
            if(response[0].codigo === 'SUCCESS') {
                setTasks((response[0].objeto.tasks)) 
            }

            if(isTaskLoaded === false) {
                isTaskLoaded = true;
            }
        })
    }, [isTaskLoaded])

    console.log(tasks);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Card className={classes.root}>
                    <Paper elevation={0} className={classes.paperContainer}>
                        <CardContent style={{padding:0}}>
                            <div className="card-header">
                                <Typography variant="h4" className={classes.panelTitle}>Task Component</Typography>
                                <Link to={ROUTES.TASK_CREATE}>
                                     <Button>NEW TASK</Button>
                                </Link>
                            </div>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {Object.keys( TaskModel.TASK_LABELS ).map( key => 
                                                <TableCell key={`tablehead-field-${key}`}>{TaskModel.TASK_LABELS[key]}</TableCell>
                                            )}
                                            <TableCell >Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TaskList taskList={tasks}></TaskList>
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

export default Task;