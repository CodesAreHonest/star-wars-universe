import React from 'react';
import Chart from "react-google-charts";
import { CircularProgress } from "@material-ui/core";
import { ScatterChartDataType } from "../../../states/species/types";

type ScatterChartProps = {
    data: ScatterChartDataType,
    hMin: number,
    hMax: number,
    vMin: number,
    vMax: number
}

const data = [
    ['Age', 'Weight'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
];


export const ScatterChart = ({ data, hMin, hMax, vMin, vMax }) => {

    const [[horizontalTitle, verticalTitle]] = data;

    const options = {
        hAxis : { title: horizontalTitle, minValue: hMin, maxValue: hMax },
        vAxis : { title: verticalTitle, minValue: vMin, maxValue: vMax },
        legend: "none"
    };

    return (
        <Chart
            width={'100%'}
            height="80vh"
            chartType="ScatterChart"
            loader={<CircularProgress/>}
            data={data}
            options={options}
        />
    )
};
