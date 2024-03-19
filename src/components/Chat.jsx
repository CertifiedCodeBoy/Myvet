import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const socket = io.connect('http://localhost:5173/a');

    useEffect(() => {
        socket.on('message', ({ message }) => {
            setChat((prevChat) => [...prevChat, message]);
            
        });

        // Clean up the effect
        return () => socket.off('message');
    }, []); // Removed chat from the dependency array
    

    const onTextChange = (e) => {
        setMessage(e.target.value);
    };

    const onMessageSubmit = (e) => {
        e.preventDefault();
        socket.emit('message :', { message });
        console.log(message);
        setMessage('');
    };

    return (
        <div>
            <h1>Chat</h1>
            <form onSubmit={onMessageSubmit}>
                <input name="message" onChange={onTextChange} value={message} />
                <button>Send</button>
            </form>
            <div>
                {chat.map((message, index) => (
                    <div key={index}>Message: {message}</div>
                ))}
            </div>
        </div>
    );
};

export default Chat;