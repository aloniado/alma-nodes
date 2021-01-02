import './App.css';
import Map from "./pages/Map";
import Gallery from "./pages/Gallery";
import React from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";


function App() {
    // return (
    //     <Stack.Navigator initialRouteName="home">
    //         <Stack.Screen name="settings" component={Map} />
    //         <Stack.Screen
    //             name="profile"
    //             component={Gallery}
    //             options={{ title: 'John Doe' }}
    //         />
    //     </Stack.Navigator>
    // );

    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Map}/>
                <Route path="/gallery" component={Gallery}/>
            </div>
        </Router>

    );
}

export default App;
