import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const {title, body} =  post;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setPost(data))
    }, [id])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setComments(data))
    },[id])

    return (
        <div>
            <p>Post id: {post.id }</p>
            <p>
                Title: <strong>{title}</strong> <br/> {body}
            </p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map( comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;<h3>this is post detail</h3>