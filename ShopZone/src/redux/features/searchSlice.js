import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genreListId: '',
};

const searchSlice = createSlice ({
    name: 'search',
    initialState,
    reducers:{
        selectGenreListId: (state, action) => {
            state.genreListId = action.payload;
        },
    },
})

export const {selectGenreListId} = searchSlice.actions;

export default searchSlice.reducer;