import React, { useState } from 'react';
import './Comment.css';

const Comment = ({ author, content, replies = [] }) => {
  const [replyText, setReplyText] = useState('');
  const [nestedReplies, setNestedReplies] = useState(replies);

  const handleReply = () => {
    if (replyText.trim() !== '') {
      const newReply = {
        author: 'User',
        content: replyText,
        replies: [],
      };
      setNestedReplies([...nestedReplies, newReply]);
      setReplyText('');
    }
  };

  return (
    <div className="comment">
      <p className="comment-content">
        <span className="author">{author}:</span> {content}
      </p>
      <div className="reply-section">
        <input
          className="reply-input"
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Reply..."
        />
        <button className="reply-btn" onClick={handleReply}>
          Reply
        </button>
      </div>
      <div className="nested-comments">
        {nestedReplies.map((reply, index) => (
          <Comment key={index} author={reply.author} content={reply.content} replies={reply.replies} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
