import React, {useEffect, useState} from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import * as ProjectModel from '../../models/Project';

function ProjectList( props ) {
    
    let tasks = props.projectList.map( (value, key) => (
        <TableRow key={`project-${key}`}>
            {Object.keys(ProjectModel.PROJECT_SCHEMA).map( key => (
              <TableCell key={`project-field-${key}`} component="th" scope="row">
                {value[key]}
              </TableCell>
        ))}
        </TableRow>
    ))

    return tasks;

}

export default ProjectList;