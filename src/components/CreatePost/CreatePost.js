import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addNewComment, addPost as addPostUsers, selectUsers } from '../../store/slices/users/usersSlice';
import { addPost as addPostPosts } from '../../store/slices/posts/postsSlice';
import './CreatePost.css'
import { TitleFunction } from '../TitleFunction/TitleFunction'

const CreatePost = () => {
    const dispatch = useDispatch()
    TitleFunction('Instagram | Create')
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        const {img: {value: img}, desc: {value: desc}} = formRef.current
        console.log(img, desc);
        const post = {
            id: new Date().getTime().toString(),
            name: currentUser.username.toLowerCase(),
            likesCount: Math.round(Math.random() * 500 + 500),
            timeAgo: Math.round(Math.random() * 8 + 2) + ' minutes ago',
            postText: desc,
            img: img,
            comments: []
        }
        dispatch(addPostPosts(post))
        dispatch(addPostUsers(post))
        // dispatch(addNewComment(post.comments))
        formRef.current.reset()
        navigate('/')
    }
    
    return (
        <div className='createPost'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form ref={formRef} onSubmit={handleSubmit} className='createPostForm'>
                <input name='img' type="text" placeholder='img'/>
                <input name='desc' type="text" placeholder='description'/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreatePost
