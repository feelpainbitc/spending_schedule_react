import "./CostForm.css"
import React,{useState} from "react";

function CostForm(props){

   const[inputName,setInputName]=useState('');
    const[inputAmount,setInputAmount]=useState('');
    const[inputDate,setInputDate]=useState('');


/*     const [userInput,setUserInput]=useState({
        name:'',
        amount:'',
        date:''
    }); */


    const nameChangeHandler=(event)=>{
        setInputName(event.target.value); 

 /*        setUserInput((previousState)=>{
            return{
                ...previousState,
                name:event.target.value
            }
        }) */
    };
      
    const amountChangeHandler=(event)=>{
        setInputAmount(event.target.value);
 /*        setUserInput((previousState)=>{
            return{
                ...previousState,
                amount:event.target.value
            }
        }) */
    };
    const dateChangeHandler=(event)=>{
        setInputDate(event.target.value);
/*         setUserInput((previousState)=>{
            return{
                ...previousState,
                date:event.target.value
            }
        }) */
    };

    const submitHandler=(event)=>{
        event.preventDefault();

        const costData={
            name:inputName,
            amount:inputAmount,
            date:new Date(inputDate)
        };
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type='text' value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Cost</label>
                    <input type='number' value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input type='date' min='2020-01-01' step='2023-12-31' value={inputDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Add new consumption</button>
                </div>
            </div>
        </form>
     );
    }

    
export default CostForm;