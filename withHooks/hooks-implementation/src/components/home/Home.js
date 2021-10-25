import React from 'react'
import {data} from '../../data/data.js'
import Table from './table/Table.js';

function Home (){
    return (
        <Table data={data}/>
    )
}

export default Home
