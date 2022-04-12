import './ExpenseItem.css';

function ExpenseItem() {
    return ( 
        <div className='expense-item'>
            <div>March 31, 1995</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>₹100</div>
            </div>
        </div>
     );
}

export default ExpenseItem;