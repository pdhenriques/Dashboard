import "./Widget.css";
import React from "react";
import moment from "moment";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";
import rawData from "../data/rawData";

const Widget = props => {
    const data = rawData.points.map(point => {
        return { time: point[0], value: point[1] };
    });

    return (
        <div className="widget">
            <div className="ui raised segment">
                <LineChart
                    width={400}
                    height={250}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="time"
                        tickFormatter={unixTime =>
                            moment(unixTime).format("HH:mm Do")
                        }
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                        dot={false}
                    />
                </LineChart>
            </div>
        </div>
    );
};

export default Widget;
