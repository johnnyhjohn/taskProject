import React from 'react';

import axios from 'axios';

const ENDPOINT = `${window.location.origin}/api/projects`;

export default class projectService extends React.Component {

    constructor (props) {
        super(props);
    }
    
    getProjects () {
        const requestOptions = {
            method: 'GET'
        };
        
        return fetch( ENDPOINT, requestOptions)
            .then((response) => response.json());
    }

    createProject( project ) {
        
        const requestOptions = {
            body : JSON.stringify(project),
            headers: { 
                'Content-Type': 'application/json'
            },
            method: 'POST'
        };
        
        return fetch( ENDPOINT, requestOptions)
            .then((response) => response.json());
    }
}
