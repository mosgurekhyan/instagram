import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { ignoreEmptyComment, ignoreEmptyPostPosts, ignoreEmptyPostUsers } from "./middleware/middleware"
import { postsReducer } from "./slices/posts/postsSlice"
import { searchTextReducer } from "./slices/searchText/searchTextSlice"
import { usersReducer } from "./slices/users/usersSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    searchText: searchTextReducer
})
  
const persistConfig = {
    key: 'instagram',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        [...getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }), ignoreEmptyComment, ignoreEmptyPostUsers, ignoreEmptyPostPosts]
    )
})

export const persistor = persistStore(store)

export default store