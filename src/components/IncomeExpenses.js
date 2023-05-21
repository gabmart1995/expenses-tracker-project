import React from 'react';
import { useGlobalState } from '../context/GlobalState';

function IncomeExpenses() {
    
    /** @type {{ 
     *      getAccountStatement: () => { 
     *          total: number, 
     *          totalIncomes: number, 
     *          totalExpenses: number 
     *      }
     *  }} 
     * */
    const { getAccountStatement } = useGlobalState();
    const accountState = getAccountStatement();

    return (
        <>
            <div className="flex justify-between my-4">
                <h4>Income</h4>
                <p>{accountState.totalIncomes.toFixed(2)}</p>  
            </div>
            <div className="flex justify-between my-4">
                <h4>Expense</h4>
                <p>{accountState.totalExpenses.toFixed(2)}</p>
            </div>
        </>
    );
}

export default IncomeExpenses;