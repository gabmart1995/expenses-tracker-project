import React from 'react';
import { useGlobalState } from '../../context/GlobalState';
import TransactionItem from './TransactionItem';

function TransactionList() {

    // obtenemos el listado de las transacciones
    // y los metodos del contexto
    const { transactions } = useGlobalState();

    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold">History</h3>
            <ul>
                {   
                    transactions.map( transaction => (
                            <TransactionItem 
                                transaction={transaction}  
                                key={transaction.id}    
                            />
                        )
                    ) 
                }
            </ul>
        </>
    );
}

export default TransactionList;