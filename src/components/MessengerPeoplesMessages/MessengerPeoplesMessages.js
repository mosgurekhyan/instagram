import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'

function MessengerPeoplesMessages() {

	const message = [
		{
			 id: '1',
			 img: 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78=',
			 name: 'Bot',
			 active: 'Active now'
		},
		{
			 id: '2',
			 img: IMAGES.cover1,
			 name: 'user_1',
			 active: 'Active 30m ago'
		},
		{
			 id: '3',
			 img: IMAGES.cover2,
			 name: 'user_2',
			 active: 'Active 30m ago'
		},
		{
			 id: '4',
			 img: IMAGES.cover3,
			 name: 'user_3',
			 active: 'Active 30m ago'
		},
		{
			 id: '5',
			 img: IMAGES.cover4,
			 name: 'user_4',
			 active: 'Active 30m ago'
		},
		{
			 id: '6',
			 img: IMAGES.cover5,
			 name: 'user_5',
			 active: 'Active 30m ago'
		}
  ]
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
