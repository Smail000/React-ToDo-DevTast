import React, { useRef } from "react"
import * as styles from "./Input.module.css"

export default function Input ({ toAdd }) {
    const ref = useRef(null)
    return (
        <div className={styles.self}>
            <input className={styles.input} type={"text"} ref={ref}/>
            <input type={"button"} className={styles.btn} value={"+"} onClick={() => {
                toAdd({done: false, name: ref.current.value, id: Math.random()})
                ref.current.value = ''
            }}/>
        </div>
    )
}