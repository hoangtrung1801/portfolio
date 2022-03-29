import { createSlice } from "@reduxjs/toolkit"
import mainColors from "../../constants/mainColors";
import { AppState } from "../store";

export interface IcolorState {
  index: number
}

const initialState: IcolorState = {
  index: 0
}

export const icolorSlice = createSlice({
  name: 'icolor',
  initialState,
  reducers: {
    changeColor: (state) => {
      state.index = (state.index + 1) % mainColors.length;
    }
  }
})

export const {changeColor} = icolorSlice.actions;

export const selectIndexColor = (state: AppState) => state.icolor.index;

export default icolorSlice.reducer;