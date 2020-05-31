import React, {useEffect, useState} from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import * as ProjectModel from '../../models/Project';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

function ProjectList( props ) {
    
    let tasks = props.projectList.map( (value, key) => (
        <TableRow key={`project-${key}`}>
            {Object.keys(ProjectModel.PROJECT_SCHEMA).map( key => (
              <TableCell key={`project-field-${key}`} component="th" scope="row">
                {value[key]}
              </TableCell>
        ))}
            <TableCell component="th" scope="row">
                <CreateIcon></CreateIcon>
                <DeleteIcon></DeleteIcon>
            </TableCell>
        </TableRow>
    ))

    return tasks;

}

export default ProjectList;