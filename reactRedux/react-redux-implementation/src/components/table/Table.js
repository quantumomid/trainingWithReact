import TableHeader from './TableHeader.js'
import TableBody from './TableBody.js'
import './Table.css';

// // BEFORE
export default function Table({data}){
    return(
        <table>
            <TableHeader/>
            <TableBody data={data} />
        </table>
    )
}



// // AFTER
// function TableHOC(HeaderHOCComponent, BodyHOCComponent){
//     return function (){
//         return(
//         <table>
//             <TableHeader/>
//             <TableBody />
//         </table>
//         )
//     }
// }

// const Table = TableHOC(TableHeader, TableBody)
// export default Table
