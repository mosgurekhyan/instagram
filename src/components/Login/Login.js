import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import './Login.css'
import IMAGES from '../../images'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import { useNavigate } from 'react-router-dom'
import { TitleFunction } from '../TitleFunction/TitleFunction'

function Login() {
    const dispatch = useDispatch()
    TitleFunction('Instagram | Login')
    const navigate = useNavigate()
    const {currentUser, data: users} = useSelector(selectUsers)
    const formRef = useRef(null)

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers())
        }
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(toggleCurrentUser({
            login: formRef.current[0].value,
            password: formRef.current[1].value
        }))
    }
    
    return (
        <div className='all'>
           <div className='allLogin'>
             <div className='imgDiv'>
                <img src={IMAGES.logo} alt='' />
             </div>
             <div className='formDiv'>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input defaultValue={'bret'} placeholder='email or phon number' type='text' />
                    <input defaultValue={'gwenborough'} placeholder='Password' type='password' />
                    <button>Log in</button>
                </form>
             </div>
           </div>
        </div>
    )
}

export default Login