import { ISpeciesPeopleResponse, ScatterChartDataType } from "./types";
import minBy from "lodash/minBy";
import maxBy from "lodash/maxBy";

export const peopleScatterChartFormat = (peopleSpecies: ISpeciesPeopleResponse[]) => {

    const sourceArray: ScatterChartDataType = [
        [
            "Height", "Mass", {
            role: "tooltip",
            type: "string",
            p   : { html: true }
        }]];

    peopleSpecies.map(species => {
        const { mass, height, name, gender } = species;

        const horizontalData = mass === "unknown" ? 0 : parseInt(mass);
        const verticalData   = height === "unknown" ? 0 : parseInt(height);

        const toolTipHtml = `
            <div style="padding: 8px; background-color: #f7f7f7">
                <div style="font-weight: bold; margin-bottom: 8px">
                    <div style="text-transform: capitalize">Name:</div>
                    <div style="text-transform: uppercase; color: dodgerblue">${name}</div>
                </div>
                
                <div style="font-weight: bold">
                    <div style="text-transform: capitalize">Gender:</div>
                    <div style="text-transform: uppercase; color: dodgerblue">${gender}</div>
                </div>
            </div>
        `;

        return [horizontalData, verticalData, toolTipHtml];
    }).reduce((accumulator, currentAttribute) => {
        accumulator.push(currentAttribute);
        return accumulator;
    }, sourceArray);

    return sourceArray;
};

export const attributeMinAndMax = (peopleSpecies: ISpeciesPeopleResponse[], key: string) => {

    const horizontalMin = minBy(peopleSpecies, key);
    const horizontalMax = maxBy(peopleSpecies, key);

    let minValue = horizontalMin[key];
    let maxValue = horizontalMax[key];

    return {
        min: parseInt(minValue),
        max: parseInt(maxValue)
    }
};

