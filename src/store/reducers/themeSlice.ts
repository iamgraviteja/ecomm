import { createSlice } from "@reduxjs/toolkit";

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: prefersDarkMode ? 'dark' : 'light',
        isDarkMode: prefersDarkMode,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            state.isDarkMode = !state.isDarkMode;
        },
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;