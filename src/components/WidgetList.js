import React from "react";
import { uuidv4 } from "../helperFunctions";
import Widget from "./Widget";


const WidgetList = [
    {
        id: uuidv4(),
        name: "Chart A",
        widget: <Widget />
    },
    {
        id: uuidv4(),
        name: "Chart B",
        widget: <Widget />
    },
    {
        id: uuidv4(),
        name: "Chart C",
        widget: <Widget />
    }
];

export default WidgetList;
