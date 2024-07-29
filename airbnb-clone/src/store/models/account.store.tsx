import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountInitialState, ResponeAccountResult } from '../../models/account.model';
import { IStateModel } from '../../models/index.store.model';
import accountServices from '../../services/account';

const initialState: IAccountInitialState = {
  token: '',
  name: '',
  email: '',
};

export const FetchUserInformation = createAsyncThunk('USER/FETCH_USER_INFO', async () => {
  const response = await new Promise((resolve) => {
    accountServices.Fetch()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  return response;
});

export const AccountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    GetUserInfo: (state: IAccountInitialState, action: PayloadAction<ResponeAccountResult>) => {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
  },
  extraReducers(builder) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    builder.addCase(FetchUserInformation.fulfilled, (state: IAccountInitialState, action: any) => {      
      state.email = action.payload?.email;
      state.name = action.payload?.name;
    });
  },
});

const { reducer: AccountReducer } = AccountSlice;

export const AccountAction = AccountSlice.actions;

//Get data
export const GetIdentity = (state: IStateModel) => state.account;

export default AccountReducer;
