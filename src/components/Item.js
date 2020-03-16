import "./Item.css";
import React from "react";
import WidgetList from "./WidgetList";

class Item extends React.Component {
    state = {
        id: this.props.data.id
    };

    render() {
        const widgetToAdd = WidgetList.find(
            widget => widget.id == this.props.data.widgetID
        );

        return (
            <div className="myItem item">
                <h5 className="ui center aligned icon header">
                    <i className="chart icon"></i>
                    {widgetToAdd.name}
                </h5>
                <div>{widgetToAdd.widget}</div>
                <button
                    className="myItem-close-button mini ui icon button"
                    onClick={() => this.props.onDelItem(this.state.id)}
                >
                    <i className="times icon"></i>
                </button>
            </div>
        );
    }
}

export default Item;
