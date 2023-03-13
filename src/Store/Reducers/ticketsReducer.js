

//Tickets state

const defaultState = {
    searchId: '',
    // filters: ['ONE','TWO','THREE','NO'],
    filters: ['1','2','3','0'],
    tickets: [],
    loading: true,
    error: false
}

//Actions
const SET_TICKETS = 'ADD_TICKETS'
const SET_SEARCH_ID = 'SET_SEARCH_ID'
const SET_LOADING = 'SET_LOADING'
const SET_ERROR = 'SET_ERROR'
// Sort
const CHEAP = 'CHEAP'
const FAST = 'FAST'
const OPTIMAL = 'OPTIMAL'
// Filters
const ALL_TRANSFER = 'ALL_TRANSFER'
const TRANSFER = 'TRANSFER'
// const ONE_TRANSFER = 'ONE_TRANSFER'
// const TWO_TRANSFER = 'TWO_TRANSFER'
// const THREE_TRANSFER = 'THREE_TRANSFER'

export const setTickets = (tickets) => ({type: SET_TICKETS, tickets})
export const setSearchId = (id) => ({type: SET_SEARCH_ID, id})
export const setLoading = (switcher) => ({type: SET_LOADING, switcher})
export const setError = (switcher) => ({type: SET_ERROR, switcher})

// Filters 

export const transfer = (value, filterType) => ({type: TRANSFER, value, filterType})
export const allTransfer = () => ({type: ALL_TRANSFER})

// Sort

export const sortCheap = () => ({type: CHEAP})
export const sortFast = () => ({type: FAST})
export const sortOptimal = () => ({type: OPTIMAL})
// function optimalCondition(x,y){
//     (x.price > y.price) ? 1: -1
//     (x.segments[0].duration > y.segments[0].duration)? 1 : -1
//     return 0;
// }
//Tickets reducer

export const ticketsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_TRANSFER:
            if(state.filters.length === 4) {
                return {...state, filters: []}
            }else{
                return {...state, filters: ['1','2','3','0']}
            }
        case TRANSFER:
            if(state.filters.includes(action.filterType)) {
                return {...state, filters: [...state.filters.filter(el => el !== action.filterType)]}
                // return {...state, filters: [...state.filters.filter(el => el !== action.filterType)], tickets: [...state.tickets.filter(el => (el.segments[0].stops).length === action.value)]}
            }else{
                return {...state, filters: [...state.filters, action.filterType]}
            }
        case SET_SEARCH_ID:
            return {...state, searchId: action.id}
        case SET_LOADING:
            return {...state, loading: action.switcher}
        case SET_ERROR:
            return {...state, error: action.switcher}
        case SET_TICKETS:
            return {...state, tickets: [...state.tickets, ...action.tickets]}
        case CHEAP:
            return {...state, tickets: [...state.tickets.sort((x,y) => x.price - y.price)]}
        case FAST:
            return {...state, tickets: [...state.tickets.sort((x,y) => x.segments[0].duration - y.segments[0].duration)]}
        // case OPTIMAL:
        //     return {...state, tickets: [...state.tickets.sort(optimalCondition)]}
        default:
            return state;
    }
}