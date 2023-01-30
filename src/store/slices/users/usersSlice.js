import { createSlice } from "@reduxjs/toolkit"
import { fetchUsers } from "./usersAPI"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        currentUser: null
    },
    reducers: {
        toggleCurrentUser(state, {payload}) {
            const user = state.data.find(user => (user.email === payload.login || user.username === payload.login) && user.password === payload.password)
            state.currentUser = user ? user : null
        },
        logOut(state) {
            state.currentUser = null
        },
        addNewMessage(state, { payload }) {
            const i = state.data.findIndex(user => user.id === state.currentUser.id)
            const answersArray = [
                {
                    question: 'how are you',
                    answer: "Fine... how are you?"
                },
                {
                    question: "hello",
                    answer: "Hello!"
                },
                {
                    question: "what are you doing",
                    answer: "Can you guess?"
                },
                {
                    question: "how old are you",
                    answer: "I am infinite"
                },
                {
                    question: "who are you",
                    answer: "I am a bot. What are you?"
                }

            ]
            if (payload === '') {
                state.currentUser.messages.push({
                    id: new Date().getTime().toString(),
                    question: `❤`,
                    answer: `❤`
                })
                state.data[i].messages.push({
                    id: new Date().getTime().toString(),
                    question: `❤`,
                    answer: `❤`
                })
            }
            else {
                state.currentUser.messages.push({
                    id: new Date().getTime().toString(),
                    question: payload,
                    answer: `${answersArray.some(el => el.question === payload.toLowerCase()) ?
                    answersArray.find(el => el.question === payload.toLowerCase()).answer : 'Go on...'}`
                })
                state.data[i].messages.push({
                    id: new Date().getTime().toString(),
                    question: payload,
                    answer: `${answersArray.some(el => el.question === payload.toLowerCase()) ?
                    answersArray.find(el => el.question === payload.toLowerCase()).answer : 'Go on...'}`
                })
            }
        },
        addPost(state, {payload}) {
            const i = state.data.findIndex(user => user.id === state.currentUser.id)
            state.data[i].posts.unshift({...payload})
            state.currentUser.posts.unshift({...payload})
        },
        addNewComment(state, {payload}) {
            const i = state.data.findIndex(user => user.id === state.currentUser.id)
            const i2 = state.data[i].posts.findIndex(post => post.id === payload.id)
            // state.data[i].posts[i2].comments.unshift({...payload.comment})
            // state.currentUser.posts[i2].comments.unshift({...payload.comment})
        },
        deletPost(state, {payload}) {
            const i = state.data.findIndex(user => user.id === state.currentUser.id)
            state.data[i].posts = [...state.data[i].posts.filter(post => post.id !== payload)]
            state.currentUser.posts = [...state.currentUser.posts.filter(post => post.id !== payload)]
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                data: [...payload]
            }
        }
    }
})

export const selectUsers = state => state.users

export const {addNewComment, toggleCurrentUser, logOut, addNewMessage, addPost, deletPost} = usersSlice.actions

export const usersReducer = usersSlice.reducer