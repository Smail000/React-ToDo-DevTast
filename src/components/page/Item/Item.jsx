import React from "react"
import * as styles from "./Item.module.css"

export default function Item ({ id, name, done, onChange }) {
    return (
        <div className={styles.self}>
            <span className={styles.id}>{id}</span>
            <span className={styles.name} style={{textDecoration: done ? "line-through" : "none"}}>{name}</span>
            <input type={"checkbox"} className={styles.checkbox} defaultChecked={done} onChange={onChange} />
        </div>
    )
}