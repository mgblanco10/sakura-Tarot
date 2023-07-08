import React, { useState } from 'react';
import './Message.css'

function Message({ onSave }) {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSaveMessage = () => {
    onSave(message);
    setMessage('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSaveMessage();
    }
  };

  return (
    <div className='commentDiv'>
      <textarea
        className='comment-box'
        placeholder="¿Cómo me hace sentir esta predicción?"
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className='buttonMessaje' onClick={handleSaveMessage}>Send</button>
    </div>
  );
}

export default Message;
