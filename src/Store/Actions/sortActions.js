import { CHEAP, FAST, OPTIMAL, SORT_TICKETS } from "./actions"


export const sortCheap = (tickets) => ({type: CHEAP, tickets})
export const sortFast = (tickets) => ({type: FAST, tickets})
export const sortOptimal = (tickets) => ({type: OPTIMAL, tickets})
// export const sortTickets = (tickets) => ({type: SORT_TICKETS, tickets})