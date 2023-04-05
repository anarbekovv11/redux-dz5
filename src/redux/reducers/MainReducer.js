import { types } from "../types";

const initialState = {
    num: 0,
    result: [],
};




export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                num: +state.num + +action.payload,
                result: [...state.result, { newResult: +state.num }],
            };
        case types.CLEAR:
            return { result: [], num: 0 };
        default:
            return state;
    }
};
