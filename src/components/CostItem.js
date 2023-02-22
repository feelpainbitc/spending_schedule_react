import './CostItem.css'

function CostItem(){
    return(
        <div className='cost-item'>
            <div>20 02 2023</div>
            <div className='cost-item__description'>
            <h2>Pants</h2>
            <div className='cost-item__description'>$50</div>
            </div>
        </div>
    );
}
export default CostItem;