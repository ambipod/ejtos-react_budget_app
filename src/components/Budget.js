import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';





const Budget = () => {
    const { dispatch, expenses } = useContext(AppContext);
    const { budget,currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
   
    const setBudget = (amount) => {
        const newBudget = amount;

        if (newBudget >= 20000) {
            alert("The budget cannot exceed 20000");
            return;
        }
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }

    
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input placeholder= {budget}
                
                required='required'
                type='number'
                onChange={(event) => setBudget(event.target.value)}
                step = "10"
                >
                </input>
            </span>
        </div>
    );
};

export default Budget;
