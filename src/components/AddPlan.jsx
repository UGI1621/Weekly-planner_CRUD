import React, { useState } from 'react';
import styles from '../styles/AddPlan.module.css'


function AddPlan(props) {

    const {onExit,onAdd,planId} = props
    const [plan,setPlan] = useState('')

    return (
        <div className={styles.page}>
            <button className={styles.exit} onClick={()=>onExit()}>X</button>
            <div className={styles.popup}>
                <span>{planId}</span>
                <input type="text" onChange={(e)=>setPlan(e.target.value)}/>
                <button onClick={()=>{onAdd(planId,plan);onExit()}}>DONE</button>
            </div>
        </div>
    );
}

export default AddPlan;