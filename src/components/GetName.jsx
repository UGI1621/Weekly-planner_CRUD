import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import styles from '../styles/Main.module.css'

function GetName(props) {

    const {ChangeName} = props
    const [name,setName] = useState('')

    return (
        <div className={styles.flex}>
            <div className={styles.getName}>
                <input type="text" placeholder='What your name?' 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <Link to='/plan'><button onClick={()=>ChangeName(name)}>Hello :)</button></Link>
            </div>
        </div>
    );
}

export default GetName;