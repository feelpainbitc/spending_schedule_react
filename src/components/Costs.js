import CostItem from "./CostItem"
import "./Costs.css"
import Card from "./Card"
import CostsFilter from "./CostsFilter";
import React, {useState} from 'react';

function Costs(props){

    const [selectedYear,setSelectedYear]=useState("2021");

    const yearChangeHandler=(year)=>{
        setSelectedYear(year);
    }
    
return(
    <div>
        
    <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        <CostItem date={props.costs[0].date}
         description={props.costs[0].description}
         amount={props.costs[0].amount}></CostItem>
        <CostItem date={props.costs[1].date}
         description={props.costs[1].description}
         amount={props.costs[1].amount}></CostItem>
         <CostItem date={props.costs[2].date}
         description={props.costs[2].description}
         amount={props.costs[2].amount}></CostItem>
         <CostItem date={props.costs[3].date}
         description={props.costs[3].description}
         amount={props.costs[3].amount}></CostItem>
    </Card>
    </div>
);
}

export default Costs;