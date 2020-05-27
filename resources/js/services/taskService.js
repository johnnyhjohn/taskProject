import React from 'react';

import axios from 'axios';

export default class taskService extends React.Component {

    constructor (props) {
        super(props);
    }
    
    getTasks () {
        const requestOptions = {
            method: 'GET'
        };
        
        return fetch(`${window.location.origin}/admin/data/tasks`, requestOptions)
            .then((response) => response.json());
    }
}
