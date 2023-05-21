import React, { useState } from 'react';

import { useGlobalState } from '../../context/GlobalState';

function TransactionForm() {

    const { addTransaction } = useGlobalState();
    const [ description, setDescription ] = useState( '' );
    const [ amount, setAmount ] = useState( 0 );

    const onSubmit = function( event ) {
        
        addTransaction({ 
            description, 
            amount, 
            id: window.crypto.randomUUID()  // id hash unique
        });

        // limpia el formulario
        event.target.reset();

        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    type="text" 
                    placeholder="Enter a description" 
                    onChange={ event => setDescription( event.target.value ) }
                    />
                <input 
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    type="number" 
                    placeholder="00.00" 
                    step="0.01"
                    onChange={ event => setAmount( Number( event.target.value ) ) }
                    />
                <button className="text-white bg-indigo-700 px-3 py-2 rounded-lg block w-full mb-2">
                    Add transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;