import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genreListId: 'aps',
    searchTerm: 'ghibli',
};

const searchSlice = createSlice ({
    name: 'search',
    initialState,
    reducers:{
        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
            state.searchTerm = action.payload;
        },
    },
})

export const {selectGenreListId} = searchSlice.actions;

export default searchSlice.reducer;