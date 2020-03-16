import './Row.css';
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

    onDelItem = id => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        });
    };

    render() {
        const renderedList = this.state.items.map(item => {
            return (
                <Item key={item.id} data={item} onDelItem={this.onDelItem} />
            );
        });
        return (
            <div className="ui clearing segment">
                <div>
                    <button
                        className="ui icon right floated button"
                        onClick={() => this.props.onDelRow(this.state.id)}
                    >
                        <i className="times icon"></i>
                    </button>
                </div>
                <br />
                <div className="ui horizontal grid">
                    {renderedList}
                    <button className="myRow-add-button ui icon button" onClick={this.onAddItem}>
                        <i className="plus icon"></i>
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
