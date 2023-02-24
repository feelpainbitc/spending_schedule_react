import './CostItem.css'
import CostDate from "./CostDate.js"
import Card from "./Card"

function CostItem(props){



    return(
        <Card className='cost-item'>
            <CostDate date={props.date}></CostDate>
            <div className='cost-item__description'>
            <h2>{props.description}</h2>
            <div className='cost-item__description'>${props.amount}</div>
            </div>
        </Card>
    );
}
export default CostItem;