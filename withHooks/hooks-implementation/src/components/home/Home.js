import React from 'react'
import {data} from '../../data/data.js'
import Table from './table/Table.js';

export const TableContext = React.createContext()

function Home (){
    return (
        <TableContext.Provider value={data}>
            <Table />
        </TableContext.Provider>
    )
}

export default Home
