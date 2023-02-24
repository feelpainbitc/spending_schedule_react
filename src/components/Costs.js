import CostItem from "./CostItem"
import "./Costs.css"
import Card from "./Card"

function Costs(props){
    
return(
    <Card className="costs">
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
);
}

export default Costs;