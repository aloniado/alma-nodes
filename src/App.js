import './App.css';
import Map from "./pages/Map";
import Picture from "./pages/Picture";
import React from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";


function App() {
    // return (
    //     <Stack.Navigator initialRouteName="home">
    //         <Stack.Screen name="settings" component={Map} />
    //         <Stack.Screen
    //             name="profile"
    //             component={Picture}
    //             options={{ title: 'John Doe' }}
    //         />
    //     </Stack.Navigator>
    // );

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
