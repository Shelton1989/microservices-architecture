import openSocket from 'socket.io-client';
import axios from 'axios';

export const socket = openSocket('http://localhost:8000/')

export const sendCommunication = (e) => {
    socket.emit('sendComms', e);
};

export const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST}`
});