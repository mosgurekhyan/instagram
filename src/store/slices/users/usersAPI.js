import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function () {
        const { data: usersData } = await axios.get('https://jsonplaceholder.typicode.com/users')
        const { data: postsData } = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')

        const data = usersData.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            avatar: 'data:image/png;base64,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',
            followers: Math.round(Math.random() * 400 + 400 ),
            following: Math.round(Math.random() * 400 + 400 ),
            bio: user.company.catchPhrase,
            password: user.address.city.toLowerCase(),
            messages: [],
            posts: [
                ...postsData.filter(post => post.albumId === user.id)
                .map(post => ({
                    id: post.id.toString(),
                    name: user.username.toLowerCase(),
                    likesCount: Math.round(Math.random() * 500 + 500),
                    timeAgo: Math.round(Math.random() * 8 + 2) + ' minutes ago',
                    postText: post.title.slice(post.title.indexOf(' ') + 1),
                    img: post.url,
                    comments: []
                }))
            ]
        }))
        return data
    }
)