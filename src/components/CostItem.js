import './CostItem.css'
import CostDate from "./CostDate.js"
import Card from "./Card"
import React , {useState} from 'react';

function CostItem(props){

    const [description,setDescription]=useState(props.description);


    const changeDescriptionHandler=()=>{
        setDescription('New cost');
    };

    return(
        <Card className='cost-item'>
            <CostDate date={props.date}></CostDate>
            <div className='cost-item__description'>
            <h2>{props.description}</h2>
            <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить</button>
        </Card>
    );
}
export default CostItem;