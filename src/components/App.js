import React from "react"
import Container from "./page/Container"

import io from 'socket.io-client';
const socket = io();

export default function App(props) {

    useEffect(() => {
        socket.on('connect', () => {
          setIsConnected(true);
        })
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('pong');
        };
      }, []);

    return (
        <Container notes={[]} socket={socket}/>
    )
}