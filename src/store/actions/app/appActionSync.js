import { types } from "../../types";


export const setCountries = data => ({
    type: types.countries,
    payload: data,
});


export const setSources = data => ({
    type: types.sources,
    payload: data,
});

