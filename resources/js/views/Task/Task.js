import React, {useEffect, useState} from 'react';
import TaskList from './../../components/Task/TaskList';
import TaskService from '../../services/taskService';

function Task() {
    console.log('task component');

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
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Task Component</div>

                        <TaskList taskList={tasks}></TaskList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;