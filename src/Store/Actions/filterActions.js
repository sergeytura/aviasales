import { TRANSFER, ALL_TRANSFER } from "./actions"

export const transfer = (value, filterType) => ({type: TRANSFER, value, filterType})
export const allTransfer = () => ({type: ALL_TRANSFER})