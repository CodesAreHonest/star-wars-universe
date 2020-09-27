import React, { Fragment } from "react";
import { ScatterChart } from "../components/ScatterChart/ScatterChart";
import { useSpeciesPeople } from "../../states/species/hooks/useSpeciesPeople";

const ScatterChartContainer = () => {
    const [scatterChartData] = useSpeciesPeople();

    const {
              data,
              horizontalAttribute: { hMin, hMax },
              verticalAttribute  : { vMin, vMax }
          } = scatterChartData;

    return (
        <Fragment>
            {data.length > 0 && <ScatterChart
                data={data}
                hMin={hMin}
                hMax={hMax}
                vMin={vMin}
                vMax={vMax}
            />}
        </Fragment>
    )
};

export { ScatterChartContainer }