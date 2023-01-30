import { memo, useEffect } from "react"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import IMAGES from "../../images"
import { addNewComment } from "../../store/slices/posts/postsSlice"
import { selectUsers } from "../../store/slices/users/usersSlice"


function CommentForm({id, setIsShow}) {
  const {currentUser} = useSelector(selectUsers)
  const dispatch = useDispatch()
  const formRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = formRef.current[0].value
    dispatch(addNewComment({id, text, username: currentUser.username}))
    formRef.current.reset()
  }
  
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
        <div className="comment-wrapper">
          <img src={IMAGES.smile} className="icon" alt=""/>
          <input onFocus={() => setIsShow(true)} type="text" className="comment-box" placeholder="Add a comment"/>
          <button className="comment-btn">post</button>
        </div>
    </form>
  )
}

export default memo(CommentForm)