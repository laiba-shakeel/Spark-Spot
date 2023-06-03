import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    // {id: '1' , title: 'Learning Redux Tollkit' , content: "I`ve heard good think"},
    // { id:'2' , title: 'slice...' , content: "the more I say slice , the more I want pizza"}
]

const ClientAccountDetailSlice = createSlice({
    name: 'ClientAccountDetail', 
    initialState, 
    reducers: {

        ClientAccountDetailAdded(state , action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.ClientAccountDetails;

export const {ClientAccountDetailAdded} = ClientAccountDetailSlice.actions

export default ClientAccountDetailSlice.reducer