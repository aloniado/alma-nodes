import './App.css';
import Map from "./pages/Map";
import Picture from "./pages/Picture";
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Map}/>
                <Route path="/picture" component={Picture}/>
            </div>
        </Router>

    );
}

export default App;
