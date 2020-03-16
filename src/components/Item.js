import './Item.css';
import React from "react";
import Widget from "./Widget";

class Item extends React.Component {
    state = {
        id: this.props.data.id
    };

    render() {
        return (
            <div className="myItem item">
                <Widget />
                <button
                    className="myItem-close-button ui icon button"
                    onClick={() => this.props.onDelItem(this.state.id)}
                >
                    <i className="times icon"></i>
                </button>
            </div>
        );
    }
}

export default Item;
