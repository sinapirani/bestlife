import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

const banUserOptions: CreateSliceOptions = {
    name: 'banuserSlice',
    initialState: {
        banned: false
    },
    reducers: {
        changeUserBanStatus: (state, action) => {
            state.banned = action.payload
        }
    }
}
const banUserSlice = createSlice(banUserOptions)

export default banUserSlice.reducer
export const {changeUserBanStatus} = banUserSlice.actions