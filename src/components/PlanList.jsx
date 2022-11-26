import React, { useState } from 'react';
import styles from '../styles/Plan.module.css'
import Span from './Span';


function PlanList(props) {
    const {list , onDel , onEdit } = props
    
    const [edit , setEdit] = useState(false)
    const [plan , setPlan] = useState(list.plan)
    
    const onEClick = ()=>{
        if(edit === true){
            setEdit(false)
        }else{
            setEdit(true)
        }
    }
    
    
    return (
        <div className={styles.plans}>
            
            <div className={styles.plan}>
                {edit ? <input type="text" size="18" value={plan} onChange={(e) => setPlan(e.target.value)} /> : <Span className='text' list={list}></Span>}
            </div>
            <div className={styles.plansbtn}>
                <button onClick={() =>{onEClick(); onEdit(list.id,plan,list.index)}}>E</button>
                <button onClick={() => onDel(list.index)}>D</button>
            </div>
        </div>
    );
}

export default PlanList;