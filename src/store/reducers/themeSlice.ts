import { createSlice } from "@reduxjs/toolkit";

 const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
        isDarkMode: false,
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