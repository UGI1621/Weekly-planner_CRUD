import React from 'react';
import styles from '../styles/Main.module.css'
import GetName from '../components/GetName';
function Main(props) {

    const {ChangeUserName} = props

    return (
        <div className={styles.main}>
            <div className={styles.greeting}>
                Have a nice WEEK!
                <p>:-)</p>
            </div>
            <GetName ChangeName={ChangeUserName}></GetName>
        </div>
    );
}

export default Main;