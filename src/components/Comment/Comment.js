import React from 'react';


const Comment = (props) => {
    const {name, body, email} = props.comments
    console.log(props.key)
    return (
       
        <div style={{border:"1px solid #e91e63", margin:"20px", borderRadius:"7px"}}>
            <h2>Comment : {props.id + 1}</h2>
            <img style={{height:"50px", width:"50px", borderRadius:"50%"}} src="https://qph.fs.quoracdn.net/main-thumb-53649307-200-dqncyxmwqqvmoiyfaxsxjgrwslffvtcd.jpeg" alt=""/>
    <p><small>{email}</small></p>
            <h5>{name}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comment;