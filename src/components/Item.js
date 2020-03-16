import React from "react";
import Widget from "./Widget";

class Item extends React.Component {
    state = {
        id: this.props.data.id
    };

    render() {
        return (
            <div className="item">
                <Widget />
                <div>
                    <button onClick={() => this.props.onDelItem(this.state.id)}>
                        Remove Item
                    </button>
                </div>
            </div>
        );
    }
}


export default Item;
