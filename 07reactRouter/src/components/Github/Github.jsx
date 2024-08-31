/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/harxxhilgg')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

  return (
    <div className='text-center m-5 bg-gray-900 text-white p-5 text-3xl'>
      Github Followers: <p className='inline italic'> {data.followers}</p>
      <img className='block m-auto' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const res = await fetch(`https://api.github.com/users/harxxhilgg`)
  return res.json()
}