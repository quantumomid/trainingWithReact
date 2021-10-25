import TableHeader from './TableHeader.js'
import TableBody from './TableBody.js'
import './Table.css';


export default function Table(){
    return(
        <table>
            <TableHeader/>
            <TableBody />
        </table>
    )
}
