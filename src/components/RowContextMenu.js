import React from "react";

class RowContextMenu extends React.Component {

    render() {
        return (
            <div class="ui simple dropdown right floated icon button">
            <i class="ellipsis horizontal icon"></i>
            <div class="left menu">
                <div class="ui left pointing dropdown link item">
                    Add Widget
                    <div class="left menu">
                        <a class="item" onClick={this.props.onAddItem}>
                            <i class="chart line icon button"></i>{" "}
                            Chart 1
                        </a>
                        <a class="item" onClick={this.props.onAddItem}>
                            <i class="chart line icon button"></i>{" "}
                            Chart 2
                        </a>
                        <a class="item" onClick={this.props.onAddItem}>
                            <i class="chart line icon button"></i>{" "}
                            Chart 3
                        </a>
                    </div>
                </div>
                <a
                    class="item"
                    onClick={this.props.onDelRow}
                >
                    Remove Row
                </a>
            </div>
        </div>
        );
    }
}

export default RowContextMenu;
