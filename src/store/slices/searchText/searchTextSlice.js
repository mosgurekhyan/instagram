import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
    name: 'searchText',
    initialState: '',
    reducers: {
        toggleSearchText(state, {payload}) {
            return payload
        },
        resetSearchText() {
            return ''
        }
    }
})

export const selectSearchText = state => state.searchText

export const {toggleSearchText, resetSearchText} = searchTextSlice.actions

export const searchTextReducer = searchTextSlice.reducer