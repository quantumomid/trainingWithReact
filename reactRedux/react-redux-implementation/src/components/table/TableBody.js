
export default function TableBody({data}){

    const tableRows = data.map((responseData, _index) => {
        const {id, title} = responseData
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                </tr>
            )
    })
    
    return (
        <tbody>
            {tableRows}
        </tbody>
    )
}