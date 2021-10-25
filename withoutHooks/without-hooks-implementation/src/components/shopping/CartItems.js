export default function CartItems(props){
    const { cartItems, handleRemove } = props

    const cartItemsList = cartItems.map((item, index) => {
        return (
            <li className={item.quantity===0 ? "removed" : null} key={index}>
                {item.name}
                {item.quantity!==0 && <button className="remove-button" onClick={() => handleRemove(item)}>X</button>}
            </li>
        )
    })
    return(
        <ul>
            {cartItemsList}
        </ul>
    )
}