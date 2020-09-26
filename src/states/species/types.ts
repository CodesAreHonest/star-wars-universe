export enum speciesActionTypes {
    GET_LIST_SUCCESS   = "GET_LIST_SUCCESS",
    GET_LIST_FAILURE   = "GET_LIST_FAILURE",
    GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS",
    GET_PEOPLE_FAILURE = "GET_PEOPLE_FAILURE"
}

export type speciesReducerTypes = {
    list: speciesResultType[],
    scatterChart: IScatterChart
}

export type ISpeciesResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: speciesResultType
}

export type speciesResultType = {
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    skin_colors: string,
    hair_colors: string,
    eye_colors: string,
    average_lifespan: string,
    homeworld: string,
    language: string,
    people: string[],
    films: string[],
    created: string,
    edited: string,
    url: string
}

export type ISpeciesPeopleResponse = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

export type ScatterChartDataType = Array<Array<string | number>>;
export type ScatterChartAttributeType = {
    min: number,
    max: number
}

export interface IScatterChart {
    data: ScatterChartDataType,

    // height
    horizontalAttribute: ScatterChartAttributeType,

    // mass
    verticalAttribute: ScatterChartAttributeType
}