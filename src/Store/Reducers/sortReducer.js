import { CHEAP, FAST, OPTIMAL, SORT_TICKETS } from "../Actions/actions"

// const defaultState = {
//     sorted: []
// }

const defaultState = null


export const sortReducer = (state = defaultState , action) => {
    switch (action.type) {
        // case SORT_TICKETS:
        //     return {sorted: [...action.tickets]}
        case CHEAP:
            return {sorted: [...action.tickets.sort((x,y) => x.price - y.price)]}
        case FAST:
            return {sorted: [...action.tickets.sort((x,y) => x.segments[0].duration - y.segments[0].duration)]}
        case OPTIMAL: 
            return {sorted: [...action.tickets.sort(function(a, b) {
                    const first = a.segments[0].duration + a.segments[1].duration + +a.price;
                    const second = b.segments[0].duration + b.segments[1].duration + +b.price;
                    return first - second;
            })]}
        default:
            return state;
    }
}