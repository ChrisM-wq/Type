import io from 'socket.io-client';
const socket = io('https://type-server.onrender.com');
export default socket;