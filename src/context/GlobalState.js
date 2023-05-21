import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = { transactions: [] };

export const Context = createContext();

export function useGlobalState() {
    const context = useContext( Context );
    return context;
}

export function GlobalProvider({ children }) {

    /**
     * Inicializa el reducer del estado
     * @returns {{ transaction: Array<{ id: string, description: string, amount: number }> }}
     */
    const initReducer = function() {
        
        const localData = window.sessionStorage.getItem('transactions');

        return localData ? JSON.parse( localData ) : initialState;
    }
    
    const [ state, dispatch ] = useReducer( AppReducer, initialState, initReducer );

    // capturamos los efectos de localstorage
    useEffect(() => {
        window.sessionStorage.setItem('transactions', JSON.stringify( state )) 
    });

    /**
     * añade una nueva transaccion
     * @param {{ description: string, amount: number }} transaction 
     */
    const addTransaction = function( transaction ) {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    /**
     * elimina una transacción
     * @param {string} id id de la transacción
     */
    const deleteTransaction = function( id ) {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    /**
     * Obtiene el estado de cuenta del usuario
     * @returns {{ total: number, totalIncomes: number, totalExpenses: number }}
     */
    const getAccountStatement = function() {

        const total = state.transactions
            .reduce(( accumulator, transaction ) => (accumulator += transaction.amount), 0)

        const totalIncomes = state.transactions
            .filter( transaction => transaction.amount > 0 )
            .reduce(( accumulator, transaction ) => (accumulator += transaction.amount), 0 )

        const totalExpenses = state.transactions
            .filter( transaction => transaction.amount < 0 )
            .reduce(( accumulator, transaction ) => ((accumulator += transaction.amount)), 0 )
        

        return {
            total, 
            totalIncomes,
            totalExpenses
        };
    }


    return (
        <Context.Provider value={{ 
                transactions: state.transactions, 
                addTransaction,
                deleteTransaction,
                getAccountStatement
            }}
        >
            {children}
        </Context.Provider>
    );
}