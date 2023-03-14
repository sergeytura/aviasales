// import SET_SEARCH_ID, SET_LOADING, SET_ERROR, SET_TICKETS from '../Actions/ticketsActions'
// import { setError, setLoading, setTickets } from "../Actions/ticketsActions"
import { SET_SEARCH_ID, SET_LOADING, SET_ERROR, SET_TICKETS } from "../Actions/actions"

// const defaultState = {
//     searchId: '',
//     filters: ['1','2','3','0'],
//     tickets: [],
//     loading: true,
//     error: false
// }

const defaultState = {
    searchId: '',
    // filters: ['1','2','3','0'],
    tickets: [],
    loading: true,
    error: false
}





// const CHEAP = 'CHEAP'
// const FAST = 'FAST'
// const OPTIMAL = 'OPTIMAL'

// export const sortCheap = () => ({type: CHEAP})
// export const sortFast = () => ({type: FAST})
// export const sortOptimal = () => ({type: OPTIMAL})

// const ALL_TRANSFER = 'ALL_TRANSFER'
// const TRANSFER = 'TRANSFER'

// export const transfer = (value, filterType) => ({type: TRANSFER, value, filterType})
// export const allTransfer = () => ({type: ALL_TRANSFER})

// const SET_TICKETS = 'ADD_TICKETS'
// const SET_SEARCH_ID = 'SET_SEARCH_ID'
// const SET_LOADING = 'SET_LOADING'
// const SET_ERROR = 'SET_ERROR'

// export const setTickets = (tickets) => ({type: SET_TICKETS, tickets})
// export const setSearchId = (id) => ({type: SET_SEARCH_ID, id})
// export const setLoading = (switcher) => ({type: SET_LOADING, switcher})
// export const setError = (switcher) => ({type: SET_ERROR, switcher})

export const ticketsReducer = (state = defaultState, action) => {
    switch (action.type) {
        // case ALL_TRANSFER:
        //     if(state.filters.length === 4) {
        //         return {...state, filters: []}
        //     }else{
        //         return {...state, filters: ['1','2','3','0']}
        //     }
        // case TRANSFER:
        //     if(state.filters.includes(action.filterType)) {
        //         return {...state, filters: [...state.filters.filter(el => el !== action.filterType)]}
        //     }else{
        //         return {...state, filters: [...state.filters, action.filterType]}
        //     }
        case SET_SEARCH_ID:
            return {...state, searchId: action.id}
        case SET_LOADING:
            return {...state, loading: action.switcher}
        case SET_ERROR:
            return {...state, error: action.switcher}
        case SET_TICKETS:
            // return {...state, tickets: [...state.tickets, ...action.tickets]}
            return {...state, tickets: [...state.tickets.sort((x,y) => x.price - y.price), ...action.tickets]}
        // case CHEAP:
        //     return {...state, tickets: [...state.tickets.sort((x,y) => x.price - y.price)]}
        // case FAST:
        //     return {...state, tickets: [...state.tickets.sort((x,y) => x.segments[0].duration - y.segments[0].duration)]}
        // case OPTIMAL: 
        //     return {...state, tickets: [...state.tickets.sort(function(a, b) {
        //             const first = a.segments[0].duration + a.segments[1].duration + +a.price;
        //             const second = b.segments[0].duration + b.segments[1].duration + +b.price;
        //             return first - second;
        //     })]}
        default:
            return state;
    }
}