import { React, useState } from 'react'
import '../User/User.css'
// import { useParams } from 'react-router'

const User = () => {
    // const { userid } = useParams()
    const [data, setData] = useState([])

    useState(() => {
        fetch(`https://api.github.com/users/Granthik-18`)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setData(data)

            })
    })

    return (
        <div className="container">
            <div className='flex'>
                <form action="">
                    <img src={`${data.avatar_url}`} alt="Profile" />
                    <br />
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' value={`${data.name}`} disabled />
                    <label htmlFor="userName">User Name: </label>
                    <input type="text" id='userName' value={`${data.login}`} disabled />
                    <label htmlFor="number">ID: </label>
                    <input type="text" id='number' value={`${data.id}`} disabled />
                    <label htmlFor="url">URL: </label>
                    <input type="text" id='url' value={`${data.html_url}`} disabled />
                </form>
            </div>
        </div>
    )
}

export default User
