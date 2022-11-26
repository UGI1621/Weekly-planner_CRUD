import React,{useState} from 'react';
import PlanList from './PlanList';
import styles from '../styles/Plan.module.css'

function Days(props) {
    const {day,onAdd ,plans,onDelPlan,onEditPlan} = props

    const planList = plans.filter(plan => plan.id === day.id)

    return (
        <div>
            <div className={styles.daysBorder}>
                <div className={styles.dayTitle}>
                    {day.day}
                    <button onClick={()=>onAdd(day.id)}>+</button>
                </div>
                <p>{planList.map(list => <PlanList key={list.id} list={list} onDel={onDelPlan} onEdit={onEditPlan} />)}</p>
            </div>
        </div>

    );
}

export default Days;