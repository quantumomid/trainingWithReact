export default function TableBody(props){
    
    const tableRows = props.data.map((playerData, index) => {
        const {SNo, name, medal, type, emoji, country, sports, age, gender} = playerData
            return (
                <tr key={index}>
                    <td>{SNo}</td>
                    <td>{name}</td>
                    <td>{medal}</td>
                    <td>{type}</td>
                    <td>{sports + emoji}</td>
                    <td>{country}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
                </tr>
            )
    })
    
    return (
        <tbody>
            {tableRows}
        </tbody>
    )
}