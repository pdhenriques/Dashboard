import React from "react";
import Row from "./Row";

class Dashboard extends React.Component {
    state = {
        rows: []
    };

    onAddRow = () => {
        const newRow = {
            id: this.uuidv4(),
            items: []
        };
        this.setState({ rows: [...this.state.rows, newRow] });
    };

    onDelRow = (id) => {
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
                <div>
                    <button onClick={this.onAddRow}>Add Row</button>
                </div>
                <div className="ui segments">{renderedList}</div>
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

export default Dashboard;
