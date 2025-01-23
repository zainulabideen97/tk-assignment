import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

function App()
{
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async (message) =>
  {
    setMessages((prevMessages) => [...prevMessages, message]);

    setLoading(true);
    setError(null);

    try
    {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok)
      {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      console.log('Message sent successfully:', data);

      setMessages((prevMessages) => [
        ...prevMessages, `${data.response}`
      ]);
    } catch (error)
    {
      console.error('Error sending message:', error);
      setError('Failed to send the message. Please try again.');
    } finally
    {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md p-4 bg-white rounded shadow">
        <ChatWindow messages={messages} />
        <MessageInput onSend={handleSend} loading={loading} />
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default App;
