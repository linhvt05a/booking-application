import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import BookingService from '../services/BookingService';

export interface PostState {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface PostList {
  post: PostState[];
}
const initialState: PostList = {
  post: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setListPost: (state, action: PayloadAction<Array<PostState>>) => {
      state.post = action.payload;
    },
  },
});

export const fetchDataPost = createAsyncThunk(
  'post/fetchDataPost',
  async (params, thunkAPI) => {
    try {
      const response = await BookingService.getListPost();
      console.log('dataaaaa thunk', response);
      thunkAPI.dispatch(setListPost(response.data));
    } catch (error) {
      console.error(error);
    }
  },
);
const {setListPost} = postSlice.actions;
const postReducer = postSlice.reducer;
export default postReducer;
