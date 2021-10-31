import TableHeader from './TableHeader.js'
import TableBody from './TableBody.js'
import './Table.css';

// // BEFORE
// export default function Table(){
//     return(
//         <table>
//             <TableHeader/>
//             <TableBody />
//         </table>
//     )
// }



// // AFTER
function TableHOC(HeaderHOCComponent, BodyHOCComponent){
    return function (){
        return(
        <table>
            <TableHeader/>
            <TableBody />
        </table>
        )
    }
}

const Table = TableHOC(TableHeader, TableBody)
export default Table
