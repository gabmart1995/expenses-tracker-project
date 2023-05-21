import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalState';

/**
 * Componente que renderiza el gráfico
 * @returns React.JSX.Element
 */
function ExpenseChart() {

    /** @type {{ 
     *      getAccountStatement: () => { 
     *          total: number, 
     *          totalIncomes: number, 
     *          totalExpenses: number 
     *      }
     *  }} 
     * */
    const { getAccountStatement } = useGlobalState();
    const acountState = getAccountStatement();
    
    // invertimos el monto para sacar el porcentaje
    if ( acountState.totalExpenses !== 0 ) {
        acountState.totalExpenses *= -1
    }

    const totalExpensesPercentage = Math.round(
        ( acountState.totalExpenses / acountState.totalIncomes ) * 100
    );

    const totalIncomesPercentage = 100 - totalExpensesPercentage;

    // console.log({totalExpensesPercentage, totalIncomesPercentage});
    
    return (
        <>
            { acountState.total > 0 ? (
                <VictoryPie 
                    colorScale={[ '#e74c3c', '#2ecc71' ]}
                    data={[
                        { x: 'Expenses', y: totalExpensesPercentage },
                        { x: 'Icomes', y: totalIncomesPercentage },
                    ]}
                    animate={{
                        duration: 200
                    }}
                    labels={({ datum }) => (`${datum.y}%`)}
                    labelComponent={
                        <VictoryLabel 
                            angle={45}
                            style={{ fill: 'white' }}
                        />
                    }
                />
                ) :  (
                    null
                )
            }
        </>
        
    );
}

export default ExpenseChart;