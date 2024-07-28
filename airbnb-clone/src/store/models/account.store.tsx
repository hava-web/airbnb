import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountInitialState } from '../../models/account.model';

const initialState: IAccountInitialState = {
  token: '',
  name: '',
  email: '',
};

export const fetchUserInformation = createAsyncThunk('USER/FETCH_USER_INFO', async () => {});

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GetUserInfo: (state: IAccountInitialState, action: PayloadAction<unknown>) => {
      console.log(action);
      console.log(state);
      return {
        ...state,
        name: action.payload?.name,
        email: action.payload?.email,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserInformation.fulfilled, () => {});
  },
});

const { reducer: accountReducer } = accountSlice;

export const accountAction = accountSlice.actions;

//Get data
export const getIdentity = (state: IAccountInitialState) => state;

export default accountReducer;
