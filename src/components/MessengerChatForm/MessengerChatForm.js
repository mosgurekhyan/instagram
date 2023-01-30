import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react'
import { memo } from 'react'
import { addNewMessage } from '../../store/slices/users/usersSlice'

function MessengerChatForm() {
  const dispatch = useDispatch()
  const [changeImage, setchangeImage] = useState(true)
  const formRef = useRef()
  const handleSubmit = (e) => {
	 e.preventDefault()
	 const message = formRef.current[0].value
	 dispatch(addNewMessage(message))
   const empt = document.getElementById('#inp')?.value
   empt === 0 ? setchangeImage(true) : setchangeImage(!false)
   formRef.current.reset()
  }

 function required(){
   const empt = document.getElementById('#inp')?.value.length
   empt % 2 === 0 || empt % 1 === 0 ? setchangeImage(true) : setchangeImage(false)
  }

  return (
	  <form name='form' ref={formRef} onSubmit={handleSubmit} className='Chat-input'>
      <input id='inp' onChange={required} name='text' type="text" placeholder="Message..."/>
      <label>
        <input type="submit" style={{display: 'none'}}/>
        <img src={changeImage ? IMAGES.like : IMAGES.send} alt=""/>
      </label>
    </form>
  )
}

export default memo(MessengerChatForm)
