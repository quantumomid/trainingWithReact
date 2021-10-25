import './AddToCart.css'

export default function AddToCart (props){
    const { handleCartChange, cartItem, handleCartSubmit } = props
    return(
        <div className="cart-input-container">
            <input 
                onChange={handleCartChange}
                name='cartInput' 
                type='text'
                placeholder="Please type the product you would like to add to your cart"
                value={cartItem}
            />
            <button className="add-cart-button" onClick={handleCartSubmit}>Add to cart</button>
        </div>
    )
}