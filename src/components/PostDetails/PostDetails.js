import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import './PostDetails.css'


const PostDetails = () => {

    const {id} = useParams()
    const [postDetail, setPostDetail] = useState({})
    const [comments, setComments] = useState([])
    const {title, body} = postDetail;
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPostDetail(data))

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(data => setComments(data) )

        
    },[id])

    useEffect(()=>{
        fetch(`https://randomuser.me/api/?results=${comments.length}`)
        .then(response => response.json())
        .then(data => console.log(data.results.picture) )
    }, [comments.length])

    
    const [showComment, setShowComment] = useState(false)

    
    return (
        <div className="post-details">
            <div className="post post-section">
               <h1>Post Detail</h1>
               <h4>{title}</h4>
               <p>{body}</p>
    <Button onClick={()=> setShowComment(!showComment)}  variant="contained" color="primary"><FontAwesomeIcon icon={faComments}/>  See Comment ({comments.length})</Button>
            </div>
            {
                
                showComment && <div className="comment-section">
                <h1 style={{backgroundColor:"black", color:"white", padding:"10px"}}><FontAwesomeIcon icon={faComments}/> Your Post Comments: {comments.length}</h1>
                {
                    comments.map((comment, index) => <Comment id={index} comments={comment}></Comment>)
                }
            </div>
            
            }
            
        </div>
        
    );
};

export default PostDetails;