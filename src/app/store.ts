import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import icolorSlice from "./slices/icolorSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      icolor: icolorSlice
    }
  })
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store;