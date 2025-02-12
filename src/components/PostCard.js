import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage, userData }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full  bg-indigo-200 hover:bg-indigo-300 rounded-lg p-3'>
        <div className='w-full  justify-center mb-2'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-lg h-90' />
        </div>
        <h2
          className='text-xl font-bold'
        >{title}</h2>
        <h2>
          {userData?.$id}</h2>
      </div>
    </Link>
  )
}


export default PostCard