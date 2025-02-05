import { createSlice } from "@reduxjs/toolkit";

export type Mode = "light" | "dark";

interface AppState {
  mode: Mode;
}

const initialState: AppState = {
  mode: "dark",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
        localStorage.setItem("mode", "dark");
      } else {
        state.mode = "light";
        localStorage.setItem("mode", "light");
      }
    },
  },
});

export default appSlice.reducer;

export const appActions = {
  ...appSlice.actions,
};
