import React,{useState} from 'react';
import AddPlan from '../components/AddPlan';
import Days from '../components/Days';
import weekly from '../data/weekPlan.json'
import styles from '../styles/Plan.module.css'
import {v4} from 'uuid'

function Plan(props) {

    const {name} = props
    const days = weekly.days
    const [plans,setPlans] = useState(weekly.plans)
    const [planId,setPlanId] = useState('')
    const [addvis,setAddvis] = useState(false)

    const onAddClick = (day)=>{
        if(addvis === false){
            setAddvis(true)
        }else{
            setAddvis(false)
        }
        setPlanId(day)
    }

    const addPlan = (id,plan)=>{
        const newPlan = {id,plan,index:v4()}
        setPlans([...plans,newPlan])
    }

    const removePlan = (index)=>{
        const newPlan = plans.filter(plan => plan.index !== index)
        setPlans(newPlan)
    }

    const editPlan = (id,planed,index)=>{
        const newPlan = plans.map(plan => plan.index === index ?{id,plan:planed,index}: plan)
        setPlans(newPlan)
    }


    return (
        <div>
            <h1>Weekly Planner</h1>
            <div className={styles.txt}>Don't Waste Your time {name} :)</div>
            <div className={styles.planFlex}>
                {days.map(day => <Days key={plans.id} day={day} plans={plans} onAdd={onAddClick} onDelPlan={removePlan} onEditPlan={editPlan} />)}
            </div>
            {addvis ? <AddPlan planId={planId} onExit={onAddClick} onAdd={addPlan}></AddPlan>:null}
        </div>
    );
}

export default Plan;