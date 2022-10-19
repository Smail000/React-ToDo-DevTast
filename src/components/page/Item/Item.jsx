import React from "react"
import * as styles from "./Item.module.css"

export default function Item ({ id, name, done, onChange, onDelete }) {
    return (
        <div className={styles.self}>
            <span className={styles.id}>{id}</span>
            <span className={styles.name} style={{textDecoration: done ? "line-through" : "none"}}>{name}</span>
            <input type={"button"} className={styles.delete} value={"❌"} onClick={onDelete} />
            <input type={"checkbox"} className={styles.checkbox} checked={done} onChange={onChange} />
        </div>
    )
}