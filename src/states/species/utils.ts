import { ISpeciesPeopleResponse, ScatterChartDataType } from "./types";
import minBy from "lodash/minBy";
import maxBy from "lodash/maxBy";

export const peopleScatterChartFormat = (peopleSpecies: ISpeciesPeopleResponse[]) => {

    const sourceArray: ScatterChartDataType = [["Height", "Mass"]];
    peopleSpecies.map(species => {
        const { mass: horizontalData, height: verticalData } = species;

        return [parseInt(horizontalData), parseInt(verticalData)];
    }).reduce((accumulator, currentAttribute) => {
        accumulator.push(currentAttribute);
        return accumulator;
    }, sourceArray);

    return sourceArray;
};

export const attributeMinAndMax = (peopleSpecies: ISpeciesPeopleResponse[], key: string) => {

    const horizontalMin = minBy(peopleSpecies, key);
    const minValue      = horizontalMin[key];
    const horizontalMax = maxBy(peopleSpecies, key);
    const maxValue      = horizontalMax[key];

    return {
        min: parseInt(minValue),
        max: parseInt(maxValue)
    }
};

