import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import GoalForm from '../components/GoalForm'


function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    // if no user, navigate to /login
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate]); // dependency array
  return (
    <>
    <section className='heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Goals dashboard</p>
    </section>
    <GoalForm/>
    </>
  )
}

export default Dashboard