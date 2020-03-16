import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";

class App extends React.Component {
    render() {
        return (
            <div>
                <div class="ui fixed inverted menu">
                    <div class="ui container">
                        <a href="#" class="header item">
                            Custom Dashboard
                        </a>
                        <a href="#" class="item">
                            Home
                        </a>
                        <a href="#" class="item">
                            About
                        </a>
                    </div>
                </div>
                <br />
                <div className="ui segment">
                    <Dashboard />
                </div>
            </div>
        );
    }
}

export default App;
