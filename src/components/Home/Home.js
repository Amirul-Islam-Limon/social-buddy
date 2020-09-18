import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import image from '../../images/main-image.jpg'
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <div className="heading">
                <h1>Enjoy Your Favorite Post</h1>
                <img src={image} alt=""/>
            </div>
            {
                users.map(user => <Post key={user.id} user={user} ></Post>)
            }
        </div>
    );
};

export default Home;