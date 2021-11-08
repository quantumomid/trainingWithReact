import './CartItems.css'

export default function CartItems(props){
    const { cartItems, handleRemove, handleCheck } = props

    const cartItemsList = cartItems.map((item, index) => {
        return (
            <li className={`${!item.confirmChoice ? "removed" : null} cart-item-container`} key={index}>
                <input role="checkbox" name={item.name} type="checkbox" checked={item.confirmChoice} onChange={() => handleCheck(item.name)} />
                <p>{item.name}</p>
                {/* {item.confirmChoice && <button className="remove-button" onClick={() => handleRemove(item)}>X</button>} */}
                {<button className="remove-button" onClick={() => handleRemove(item)} disabled={!item.confirmChoice}>X</button>}
            </li>
        )
    })
    return(
        <div className="cart-list">
            <h2>Your cart</h2>
            <ul>
                {cartItemsList}
            </ul>
        </div>
    )
}