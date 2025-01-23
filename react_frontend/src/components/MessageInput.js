// src/components/MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onSend }) =>
{
    const [message, setMessage] = useState('');

    const handleSend = () =>
    {
        if (message.trim())
        {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <div className="flex mt-4">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow p-2 border rounded-l"
                placeholder="Type your message..."
            />
            <button
                onClick={handleSend}
                className="p-2 bg-blue-500 text-white rounded-r"
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;
