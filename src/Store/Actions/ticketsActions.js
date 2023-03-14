import { SET_TICKETS, SET_SEARCH_ID, SET_LOADING, SET_ERROR } from "./actions"

export const setTickets = (tickets) => ({type: SET_TICKETS, tickets})
export const setSearchId = (id) => ({type: SET_SEARCH_ID, id})
export const setLoading = (switcher) => ({type: SET_LOADING, switcher})
export const setError = (switcher) => ({type: SET_ERROR, switcher})