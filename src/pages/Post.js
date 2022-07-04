import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

function Post({ Username, Caption, ImageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar
                className="post__avatar"
                alt={Username}
                src="/"
                />
            <h3>{Username}</h3>
            </div>

            <img className="post__image" src= {ImageUrl} alt="img" />
            <h4 className="post__text"><strong>{Username}:</strong> {Caption}</h4>
        </div>
    )
}

export default Post