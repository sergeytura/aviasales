import { ALL_TRANSFER, TRANSFER } from "../Actions/actions"

const defaultState = {
    filters: ['1','2','3','0']
}

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_TRANSFER:
            if(state.filters.length === 4) {
                return {filters: []}
            }else{
                return {filters: ['1','2','3','0']}
            }
        case TRANSFER:
            if(state.filters.includes(action.filterType)) {
                return {filters: [...state.filters.filter(el => el !== action.filterType)]}
            }else{
                return {filters: [...state.filters, action.filterType]}
            }
        default:
            return state;
    }
}