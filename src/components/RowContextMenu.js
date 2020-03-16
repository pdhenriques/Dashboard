import React from "react";
import WidgetList from "./WidgetList";

class RowContextMenu extends React.Component {
    render() {
        const widgetList = WidgetList.map((widget) => {
            return <a className="item" key={widget.id} onClick={() => this.props.onAddItem(widget.id)}>
                <i className="chart line icon button"></i>{widget.name}
            </a>;
        });

        return (
            <div className="ui simple dropdown right floated icon button">
                <i className="ellipsis vertical icon"></i>
                <div className="left menu">
                    <div className="ui left pointing dropdown link item">
                        Add Widget
                        <div className="left menu">
                            {widgetList}
                        </div>
                    </div>
                    <a className="item" onClick={this.props.onDelRow}>
                        Remove Row
                    </a>
                </div>
            </div>
        );
    }
}

export default RowContextMenu;
