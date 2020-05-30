import React, {useEffect, useState} from 'react';
import ProjectList from './../../components/Project/ProjectList';
import ProjectService from '../../services/projectService';
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
    }
  }));

function Project() {

    const classes = useStyles();

    console.log('project component')
    const projectService = new ProjectService();
    let isTaskLoaded = false;
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        projectService.getProjects().then((response) => {
            if(response[0].codigo === 'SUCCESS') {
                setProjects((response[0].objeto.projects)) 
            }

            if(isTaskLoaded === false) {
                isTaskLoaded = true;
            }
        })
    }, [isTaskLoaded])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Card className={classes.root}>
                    <Paper elevation={0} className={classes.paperContainer}>
                        <CardContent style={{padding:0}}>
                            <div className="card-header">Project Component</div>
                            <ProjectList projectList={projects}></ProjectList>
                        </CardContent>
                    </Paper>
                </Card>
            </div>
        </div>
    );
}

export default withRouter(Project);