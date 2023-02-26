import "./CostForm.css"
import React,{useState} from "react";

function CostForm(props){

   const[inputDescription,setInputDescription]=useState("");
    const[inputAmount,setInputAmount]=useState("");
    const[inputDate,setInputDate]=useState("");



    const descriptionChangeHandler=(event)=>{
        setInputDescription(event.target.value); 
    };
      
    const amountChangeHandler=(event)=>{
        setInputAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setInputDate(event.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();

        const costData={
            description:inputDescription,
            amount:inputAmount,
            date:new Date(inputDate)
        };
        console.log(costData);
        props.onSaveCostData(costData);
        setInputDescription('');
        setInputAmount('');
        setInputDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type='text' value={inputDescription} onChange={descriptionChangeHandler}/>
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