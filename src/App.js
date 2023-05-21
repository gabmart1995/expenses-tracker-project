import React from 'react';

import { GlobalProvider } from './context/GlobalState';

import { 
    Header, 
    IncomeExpenses, 
    Balance, 
    TransactionForm, 
    TransactionList,
    ExpenseChart
} from './components'


function App() {
    return (
        <GlobalProvider>
            <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
                <div className="container mx-auto w-3/6">
                    <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-5">
                        <div>
                            <Header />
                            <IncomeExpenses />
                            <Balance />
                            <TransactionForm />
                        </div>
                        <div className="flex flex-col flex-1">
                            <ExpenseChart />
                            <TransactionList />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;