import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountInitialState, ResponseAccountResult } from '../../models/account.model';
import { IStateModel } from '../../models/index.store.model';
import accountServices from '../../services/account';
import { GetCookie } from '../../utils/cookie.handle';

const initialState: IAccountInitialState = {
  token: undefined,
  name: '',
  email: '',
  isAuthorized: false,
  isLoading: false,
};

export const FetchUserInformation = createAsyncThunk('USER/FETCH_USER_INFO', async () => {
  const response = await new Promise((resolve) => {
    accountServices
      .Fetch()
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
    GetUserInfo: (state: IAccountInitialState, action: PayloadAction<ResponseAccountResult>) => {
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
      state.isLoading = true;
      state.token = GetCookie('token');
    });
  },
});

const { reducer: AccountReducer } = AccountSlice;

export const AccountAction = AccountSlice.actions;

//Get data
export const GetIdentity = (state: IStateModel) => state.account;

export default AccountReducer;
