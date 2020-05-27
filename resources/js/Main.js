import RouteHandler from './routes/Route';
import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

function App() {

    return (
        <Router>
          <Route component={RouteHandler} />
        </Router>
    );
}

export default App;