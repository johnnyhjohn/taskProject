import React, {useEffect, useState} from 'react';

function TaskList( props ) {
    
    let tasks = props.taskList.map( (value, key) => {
        return <div key={key}> Tarefa : {value.name} </div>
    })

    return tasks;

}

export default TaskList;