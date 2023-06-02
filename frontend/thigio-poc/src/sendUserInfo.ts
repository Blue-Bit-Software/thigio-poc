import axios from 'axios';
import { service } from './utils/api';

export const sendUserInfo = async (userInfo: any) => {
    const urlEndpoint = 'http://localhost:4000/getBlock';
    const response = await service.post(
        urlEndpoint,
        userInfo
    );
    return response.data;
}