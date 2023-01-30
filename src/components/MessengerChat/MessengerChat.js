import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerChat.css'

function  MessengerChat() {
  const {currentUser} = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
	    {
			currentUser?.messages.map(mes => (
				<div key={mes.id}> 
					<h3 className='user2'>{mes.question}</h3>
					<div className='img--bot'>
					  <img className='mes-img' src="https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78=" alt="" />
					  <h3 className='bot2'>{mes.answer}</h3>
					</div>
				</div>
			))
		}
	 </div>
  )
}

export default memo(MessengerChat)
