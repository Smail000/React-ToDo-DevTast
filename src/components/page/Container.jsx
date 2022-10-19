import React, { useEffect, useState } from "react"
import * as styles from "./Container.module.css"
import Item from "./Item/Item"

import io from 'socket.io-client';
const socket = io();
var toSend = false

export default function Container () {

    useEffect(() => {
        socket.on('change', data => {
            setNotes(data)
        })
    })

    const [ notes, setNotes ] = useState(null)

    const [, forceRender] = useState({})
    if (toSend) {
        toSend = false
        socket.emit('change', notes)
    }

    return (
        <div className={styles.self}>
            <h1 className={styles.label}>React ToDo</h1>
            <div className={styles.container}>
                { notes === null ? <h3>Loading...</h3> : ( notes.length === 0 ? <h3>No notes</h3> :
                    notes.map((note, i) => 
                    <Item id={i+1} name={note.name} done={note.done} 
                    key={note.id} onChange={() => {note.done = !note.done; socket.emit('change', notes);forceRender({})}} 
                    onDelete={() => {setNotes(notes.filter(elem => elem.id !== note.id)); toSend = true}}/>
                ))}
            </div>
        </div>
    )
}

