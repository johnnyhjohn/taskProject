import React, { useEffect, useState } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import * as TaskModel from '../../models/Task';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


function TaskList(props) {

    let tasks = props.taskList.map((value, key) => (
        <TableRow key={`project-${key}`}>
            {Object.keys(TaskModel.TASK_SCHEMA).map(key => (
                <TableCell key={`project-field-${key}`} component="th" scope="row">
                    {(key.indexOf('id_') != -1)
                    ? value[key.replace('id_','')].name
                    :value[key]}
                </TableCell>
            ))}
            <TableCell component="th" scope="row">
                <CreateIcon></CreateIcon>
                <DeleteIcon></DeleteIcon>
            </TableCell>
        </TableRow>
    ));

    return tasks;

}

export default TaskList;