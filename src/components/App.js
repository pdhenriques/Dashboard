import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";


class App extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <Dashboard />
            </div>
        );
    }
}

export default App;
