import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import Post from '../Post/Post'
import { useEffect } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './Posts.css'
import { memo } from 'react'
import { resetSearchText, selectSearchText } from '../../store/slices/searchText/searchTextSlice'
import { useMemo } from 'react'

function Posts() {
  const dispatch = useDispatch()
  const {details, error, isLoading} = useSelector(selectPosts)
  const searchText = useSelector(selectSearchText)

  useEffect(() => {
    if (!details.length) { 
     dispatch(fetchPosts())
    }
  }, [])

  useEffect(() => {
   return () => {
    dispatch(resetSearchText)
   }
  }, [])

  const filteredPosts = useMemo(() => {
    return [...details.filter(post => post.name.includes(searchText.toLowerCase()))]
  }, [details, searchText])
  
  return (
    <>
      {
       isLoading && <LoadingSpinner/>
      }
      {
       !isLoading && error ? <h1 className='error'>Error</h1> : null
      }
      {
       !isLoading && details.length ? filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} comments={el.comments}/>) : null
      }
    </>
  )
}

export default memo(Posts, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))