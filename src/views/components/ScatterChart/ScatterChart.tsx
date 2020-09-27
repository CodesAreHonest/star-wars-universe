import React from 'react';
import Chart from "react-google-charts";
import { CircularProgress } from "@material-ui/core";

export const ScatterChart = ({ data, hMin, hMax, vMin, vMax }) => {

    const [[horizontalTitle = "", verticalTitle = ""]] = data;

    const options = {
        hAxis    : {
            title   : horizontalTitle,
            minValue: hMin,
            maxValue: hMax
        },
        vAxis    : {
            title   : verticalTitle,
            minValue: vMin,
            maxValue: vMax
        },
        legend   : "none",
        chartArea: {
            width : "60%",
            height: "70%"
        },
        tooltip  : { isHtml: true, trigger: "visible" },
        is3D     : true
    };

    return (
        <Chart
            width="100%"
            height="75vh"
            chartType="ScatterChart"
            loader={<CircularProgress/>}
            data={data}
            options={options}
        />
    )
};
