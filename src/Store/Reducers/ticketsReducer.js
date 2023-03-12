

//Tickets state

const defaultState = {
    searchId: '',
    tickets: [],
    loading: true,
    error: false
}

//Actions

const SET_TICKETS = 'ADD_TICKETS'
const SET_SEARCH_ID = 'SET_SEARCH_ID'
const SET_LOADING = 'SET_LOADING'
const SET_ERROR = 'SET_ERROR'

export const setTickets = (tickets) => ({type: SET_TICKETS, tickets})
export const setSearchId = (id) => ({type: SET_SEARCH_ID, id})
export const setLoading = (switcher) => ({type: SET_LOADING, switcher})
export const setError = (switcher) => ({type: SET_ERROR, switcher})

//Tickets reducer

export const ticketsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SEARCH_ID:
            return {...state, searchId: action.id}
        case SET_LOADING:
            return {...state, loading: action.switcher}
        case SET_ERROR:
            return {...state, error: action.switcher}
        case SET_TICKETS:
            return {...state, tickets: [...state.tickets, ...action.tickets]}
        default:
            return state;
    }
}