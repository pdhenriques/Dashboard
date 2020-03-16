import React from "react";
import { uuidv4 } from "../helperFunctions";
import Row from "./Row";

class Dashboard extends React.Component {
    state = {
        rows: []
    };

    componentDidMount = () => {
        this.onAddRow();
    }

    onAddRow = () => {
        const newRow = {
            id: uuidv4(),
            items: []
        };
        this.setState({ rows: [...this.state.rows, newRow] });
    };

    onDelRow = id => {
        this.setState({
            rows: this.state.rows.filter(row => row.id !== id)
        });
    };

    render() {
        const renderedList = this.state.rows.map(row => {
            return <Row key={row.id} data={row} onDelRow={this.onDelRow} />;
        });
        return (
            <div>
                <div className="ui segments">{renderedList}</div>
                <button className="fluid ui button" onClick={this.onAddRow}>
                    <i className="plus icon" />
                </button>
            </div>
        );
    }

}

export default Dashboard;
