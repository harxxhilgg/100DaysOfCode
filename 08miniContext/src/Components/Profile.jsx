import {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)

  if (!user) return <div className='italic text-3xl mt-10 select-none'>please login</div>

  return <div className='italic text-3xl mt-10 select-none'>Welcome {user.username}</div>
}

export default Profile
