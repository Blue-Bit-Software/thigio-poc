import { sendUserInfo } from './sendUserInfo';
import './App.css';
import { useState } from 'react';

export const mockJson = {
    "username": "user1",
    "email": "useEmail@email.com",
    "level": 500,
    "score": 2000,
}

export const SendData = () => {
    const [transaction, setTransaction] = useState(JSON.stringify(mockJson));

    const handleGetInfo = async (): Promise<void> => {
        const res = await sendUserInfo(mockJson);
        setTransaction(JSON.stringify(res));
    }

    return (
        <div id="form">
            <textarea value={transaction} readOnly />
            <button onClick={handleGetInfo}>Submit</button>
        </div>
    );
}


