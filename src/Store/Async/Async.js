import { setSearchId, setTickets, setLoading, setError } from "../Reducers/ticketsReducer"

export const fetchSearchId = () => {
    return dispatch => {
        fetch('https://aviasales-test-api.kata.academy/search')
        .then(data => data.json())
        .then(({ searchId }) => {
            dispatch(setSearchId(searchId))
            return searchId
        })
        .then((searchId) => {
            dispatch(fetchTickets(searchId))
        })
    }
}

export const fetchTickets = (searchId) => {
    return dispatch => {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
            .then(data => {
                dispatch(setLoading(true))
                if(data.status === 200) {
                    return data.json()
                }
                if(data.status === 500) {
                    dispatch(fetchTickets(searchId))
                    throw new Error('ожидание')
                }
                if(data.status !== 200 && data.status !== 500) {
                    dispatch(setError(true));
                    dispatch(setLoading(false));
                }
            })
            .then(({tickets, stop}) => {
                if(!stop) {
                    dispatch(setTickets(tickets))
                    dispatch(fetchTickets(searchId))
                }
                if(stop)  {
                    dispatch(setLoading(false))
                }
            })
            .catch((err) => err)
    }
}