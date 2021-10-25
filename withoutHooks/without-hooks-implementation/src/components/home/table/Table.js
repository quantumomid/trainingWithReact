import TableHeader from './TableHeader.js'
import TableBody from './TableBody.js'
import './Table.css';


export default function Table({data}){
    return(
        <table>
            <TableHeader/>
            <TableBody data={data}/>
        </table>
    )
}
