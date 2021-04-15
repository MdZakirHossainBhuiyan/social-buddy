import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;

    return (
        <div>
            <h3>Name: {name} - <i>{email}</i></h3>
            <p><strong>Comment: </strong>{body}</p>
        </div>
    );
};

export default Comment;