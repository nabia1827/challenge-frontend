import { types } from "../types";

const initialValues = {
    countries: [],
    sources: [],
    
};

export const appReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.countries:
            return {
                ...state,
                countries: [...action.payload],

            };
        case types.sources:
            return {
                ...state,
                sources: [...action.payload],

            };
        
        default:
            return state;

    }
};