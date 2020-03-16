import React from "react";
import Item from "./Item";

class Row extends React.Component {
    state = {
        id: this.props.data.id,
        items: []
    };

    onAddItem = () => {
        const newItem = {
            id: this.uuidv4()
        };
        this.setState({ items: [...this.state.items, newItem] });
    };

    onDelItem = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        });
    };

    render() {
        const renderedList = this.state.items.map(item => {
            return <Item key={item.id} data={item} onDelItem={this.onDelItem} />;
        });
        return (
            <div className="ui segment">
                <div className="ui relaxed grid">{renderedList}</div>
                <br />
                <div>
                    <button onClick={this.onAddItem}>Add Item</button>
                </div>
                <div>
                    <button onClick={() => this.props.onDelRow(this.state.id)}>
                        Remove Row
                    </button>
                </div>
            </div>
        );
    }
    
    uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
            c
        ) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

export default Row;
