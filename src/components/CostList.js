import CostItem from "./CostItem"
import "./CostList.css"


const CostList =(props)=>{
    let costsContent=<p>No spending money this year</p>;
    
    if(props.costs.length===0){
        return <h2 className="cost-list__fallback">
            No spending money this year
        </h2>
    }
    return <ul className="cost-list">
        {props.costs.map((cost)=>(
        <CostItem
        key={cost.id}
        description={cost.description}
        date={cost.date}
        amount={cost.amount}
    />))}
    </ul>
}

export default CostList;