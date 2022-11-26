import React,{useState} from 'react';
import styled,{css} from 'styled-components'
import styles from '../styles/Span.module.css'

const Div = styled.div`
text-decoration : none;
color : black;

    ${props => props.checked && css`
        text-decoration : line-through;
        color : gray;
    `}

`


function Span(props) {
    const {list} = props;

    const [check , setCheck] = useState(false);
    
    const onChecked = (checks)=>{
        if(checks === false){
            setCheck(true)
        }else{
            setCheck(false)
        }
    }

    return (
        <div className={styles.div}>
            <input className='checkbox' type="checkbox" onClick={()=>onChecked(check)}/>
            {check ? <Div checked>{list.plan}</Div> : <Div>{list.plan}</Div>}
        </div>
    );
}

export default Span;