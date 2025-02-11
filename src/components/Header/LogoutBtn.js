import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
      navigate("/login")
      dispatch(logout())
    })
  }
  return (
    <button
      className='inline-bock mx-1 px-6 py-2 duration-200 font-bold border-1 border-solid text-white hover:bg-indigo-400 rounded-full'
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn