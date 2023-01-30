import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "./postsAPI"

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        details: [],
        isLoading: false,
        error: ''
    },
    reducers: {
        addNewComment (state, {payload}) {
            const i = state.details.findIndex(post => post.id === payload.id)
            state.details[i].comments.push({
                id: new Date().getTime().toString(),
                username: payload.username,
                text: payload.text
            })
        },
        addPost(state, {payload}) {
            state.details.unshift({...payload})
        }, 
        deletPost(state, {payload}) {
            return {
                ...state,
                details: [
                    ...state.details.filter(post => post.id !== payload)
                ]
            }
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            state.details = payload
            state.isLoading = false
            state.error = ''            
        },
        [fetchPosts.rejected]: (state) => {
            state.details = []
            state.isLoading = false
            state.error = 'e'
        }
    }
})

export const selectPosts = state => state.posts

export const {addNewComment, addPost, deletPost} = postsSlice.actions

export const postsReducer = postsSlice.reducer