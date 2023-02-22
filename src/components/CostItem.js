import './CostItem.css'

function CostItem(){

    const costDate= new Date(2022, 1, 20);
    const costDescription= "Pants";
    const costAmount=120;

    return(
        <div className='cost-item'>
            <div>{costDate.toISOString()}</div>
            <div className='cost-item__description'>
            <h2>{costDescription}</h2>
            <div className='cost-item__description'>${costAmount}</div>
            </div>
        </div>
    );
}
export default CostItem;