import { types } from "./types";



export const addAction = (input) => {
    return {
        type: types.ADD,
        payload: input,
    };
};
export const clearAction = () => {
    return {
        type: types.CLEAR,
    };
};
