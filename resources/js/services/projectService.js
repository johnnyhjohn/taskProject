import React from 'react';

import axios from 'axios';

export default class projectService extends React.Component {

    constructor (props) {
        super(props);
    }
    
    getProjects () {
        const requestOptions = {
            method: 'GET'
        };
        
        return fetch(`${window.location.origin}/admin/data/projects`, requestOptions)
            .then((response) => response.json());
    }
}
