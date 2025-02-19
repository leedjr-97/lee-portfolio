import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Mode = "light" | "dark";

interface AppState {
  mode: Mode;
  isMobile: boolean;
}

const initialState: AppState = {
  mode: "dark",
  isMobile: false,
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
    toggleMobileView: (state, { payload }: PayloadAction<boolean>) => {
      state.isMobile = payload;
    },
  },
});

export default appSlice.reducer;

export const appActions = {
  ...appSlice.actions,
};
