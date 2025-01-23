// src/components/ChatWindow.js
import React from 'react';

const ChatWindow = ({ messages }) =>
{
    return (
        <div className="flex flex-col h-80 p-4 border rounded overflow-y-auto bg-gray-100">
            {messages.map((msg, index) => (
                <div key={index} className="mb-2 p-2 bg-white rounded shadow">
                    {msg}
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;
