import React, { ChangeEventHandler } from 'react';
import { speciesResultType } from "../../../states/species/types";

type MaterialSelectProp = {
    value: number | string,
    onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    results: speciesResultType[]
};

export const HTMLSelect: React.FC<MaterialSelectProp> = ({ value, onSelectChange, results }) => {

    return (
        <select onChange={onSelectChange} value={value}>
            {results.map((option, key) => {
                const { name } = option;
                return (
                    <option value={name} key={key}>{name}</option>
                )
            })}
        </select>
    )
};
