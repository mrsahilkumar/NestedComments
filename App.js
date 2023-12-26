import React, { useState } from 'react';
import Comment from './Comment';
import './Comment.css'; 

const App = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Person 1',
      content: 'Name',
      replies: [],
    },
  ]);

  const addReply = (commentId, replyText) => {
    const updatedComments = [...comments];
    const commentToUpdate = updatedComments.find((comment) => comment.id === commentId);

    if (commentToUpdate) {
      const newReply = {
        id: commentToUpdate.replies.length + 1,
        author: 'User',
        content: replyText,
        replies: [],
      };
      commentToUpdate.replies.push(newReply);
      setComments(updatedComments);
    }
  };

  return (
    <div className="app">
      <h1><u>Nested Comments</u></h1>
      <div className="content">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            author={comment.author}
            content={comment.content}
            replies={comment.replies}
            addReply={addReply}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

