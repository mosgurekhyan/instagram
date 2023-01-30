import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function () {
        const {data: postsData} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const {data: commentsData} = await axios.get('https://jsonplaceholder.typicode.com/comments')
        
        const data = postsData.map(post => ({
            id: post.id.toString(),
            name: post.title.slice(0, post.title.indexOf(' ')),
            likesCount: Math.round(Math.random() * 500 + 500),
            timeAgo: Math.round(Math.random() * 8 + 2) + ' minutes ago',
            postText: post.title.slice(post.title.indexOf(' ') + 1),
            img: post.url,
            comments: [
                ...commentsData.filter(com => com.postId === post.id)
                .map(com => ({
                    id: com.id.toString(),
                    username: com.name.slice(0, com.name.indexOf(' ')),
                    text: com.body
                }))
            ]
        }))
        return data
    }  
)