import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    const history = useHistory()
    const handleButton=(id)=>{
        history.push(`/post/`+id)
    }
    const{title, body, id} = props.user
    return (
        <div className="post">
            <h4>{title}</h4>
            <p>{body}</p>
        <Button onClick={()=>handleButton(id)} variant="contained" color="secondary"> See more <FontAwesomeIcon icon={faComments}/></Button>
        </div>
    );
};

export default Post;