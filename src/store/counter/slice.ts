import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: 0,
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
        return action.payload;
    },
  }
})

export const { 
    setCounter
} = counterSlice.actions

export const getCounter = (root: RootState) => root.counter;

export default counterSlice.reducer