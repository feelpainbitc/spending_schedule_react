import CostItem from "./CostItem"
import "./Costs.css"
import Card from "./Card"
import CostsFilter from "./CostsFilter";
import React, {useState} from 'react';

function Costs(props){

    const [selectedYear,setSelectedYear]=useState("2023");

    const yearChangeHandler=(year)=>{
        setSelectedYear(year);
    }

    const filteredCosts=props.costs.filter(cost=>
        {
            return cost.date.getFullYear().toString()===selectedYear;
            
        });

    let costsContent=<p>No spending money this year</p>;
    
    if(filteredCosts.length>0){
        costsContent=filteredCosts.map((cost)=>(
        <CostItem
        key={cost.id}
        description={cost.description}
        date={cost.date}
        amount={cost.amount}
    />))
    }
return(
    <div>
        
    <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        {costsContent}
    </Card>
    </div>
);
}

export default Costs;