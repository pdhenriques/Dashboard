import React from "react";
import "./App.css";
import Widget from "./Widget";

const App = () => {
    return (
        <div className="ui relaxed grid">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
        </div>
    );
};

export default App;
