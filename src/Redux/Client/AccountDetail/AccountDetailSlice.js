import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    // {id: '1' , title: 'Learning Redux Tollkit' , content: "I`ve heard good think"},
    // { id:'2' , title: 'slice...' , content: "the more I say slice , the more I want pizza"}
]

const AccountDetailSlice = createSlice({
    name: 'AccountDetail', 
    initialState, 
    reducers: {

        DetailAdded(state , action) {
            state.push(action.payload)
        }
    }
})

export const selectAllDetails = (state) => state.AccountDetails;

export const {DetailAdded} = AccountDetailSlice.actions

export default AccountDetailSlice.reducer