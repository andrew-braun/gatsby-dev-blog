import React from "react";
import styles from "../styles/users.module.css";
import Container from "../components/container";

const User = (props) => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div classname={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default User;