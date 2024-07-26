import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAccountInitialState } from "../../models/account.model";

const initialState: IAccountInitialState = {
    token: '',
    name: '',
    email: ''
};

export const fetchUserInformation = createAsyncThunk('USER/FETCH_USER_INFOR', async () => {
        
});

export const accountSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchUserInformation.fulfilled, () => {

        });
    },
});

const {reducer: accountReducer} = accountSlice;

export const accountAction = accountSlice.actions;

export default accountReducer;