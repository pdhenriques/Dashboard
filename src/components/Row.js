import "./Row.css";
import React from "react";
import { uuidv4 } from "../helperFunctions";
import Item from "./Item";
import RowContextMenu from "./RowContextMenu";

class Row extends React.Component {
    state = {
        id: this.props.data.id,
        items: []
    };

    onAddItem = (widgetId) => {
        const newItem = {
            id: uuidv4(),
            widgetID: widgetId
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
                <RowContextMenu onAddItem={this.onAddItem} onDelRow={() =>
                        this.props.onDelRow(this.state.id)
                    }/>
                <div className="ui horizontal grid">
                    {renderedList}
                </div>
            </div>
        );
    }

}

export default Row;
