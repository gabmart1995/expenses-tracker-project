import React from 'react';
import { useGlobalState } from '../context/GlobalState';

function Balance() {

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
        <div className="flex justify-between my-2">   
            <h3>Your Balance</h3>
            <h1 className="text-2x1 font-bold">${accountState.total.toFixed(2)}</h1>
        </div>
    );
}

export default Balance;