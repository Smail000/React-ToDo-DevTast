import React, { useEffect, useState } from "react"
import * as styles from "./Container.module.css"
import Item from "./Item/Item"

import io from 'socket.io-client';
const socket = io();

export default function Container () {

    useEffect(() => {
        socket.on('change', data => {
            setNotes(data)
        })
    })

    const [ notes, setNotes ] = useState([
        {name: "test", done: false, id: Math.random()},
        {name: "test1", done: true, id: Math.random()},
        {name: "test2", done: false, id: Math.random()}
    ])

    const [, forceRender] = useState({})

    return (
        <div className={styles.self}>
            <h1 className={styles.label}>React ToDo</h1>
            <div className={styles.container}>
                {notes.map((note, i) => 
                    <Item id={i+1} name={note.name} done={note.done} 
                    key={note.id} onChange={() => {note.done = !note.done; socket.emit('change', notes);forceRender({})}} />
                )}
            </div>
        </div>
    )
}

