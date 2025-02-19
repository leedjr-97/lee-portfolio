import { RootState } from "./store"; // adjust the path as needed

export const selectMode = (state: RootState) => state.app.mode;

export const retrieveIsMobile = (state: RootState) => state.app.isMobile;
