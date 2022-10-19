import React from "react"
import * as styles from "./Item.module.css"

export default function Item ({ id, name, done }) {
    return (
        <div className={styles.self}>
            <span className={styles.id}>{id}</span>
            <span className={name} style={{textDecoration: done ? "line-through" : "none"}}>{name}</span>

        </div>
    )
}