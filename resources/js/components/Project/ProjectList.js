import React, {useEffect, useState} from 'react';

function ProjectList( props ) {
    
    let tasks = props.projectList.map( (value, key) => {
        return <div key={key}> Projeto : {value.name} </div>
    })

    return tasks;

}

export default ProjectList;