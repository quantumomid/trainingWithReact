import React, {useState} from 'react'
import AddToCart from './AddToCart'
import CartItems from './CartItems'
import './Shopping.css'

export default function Shopping(){

    const [cartItem, setCartItem] = useState("")
    const [cart, setCart] = useState([
                        {
                            name: "Olive Oil",
                            quantity: 1
                        }
                        ])

    const handleCartChange = (e) => {
        setCartItem(e.target.value)
        }

    const handleCartSubmit = () => {
        const newCartItem = {
            name: cartItem,
            quantity: 1
        }
        setCart(prevState => {
            return [...prevState, newCartItem]
        })
        setCartItem("")
    }

    const handleRemove = (itemToRemove) => {
        setCart(prevState => {
            const filteredCart = prevState.map(item => {
                if (item.name===itemToRemove.name) {
                    item.quantity=0
                }
                return item
            })
            return filteredCart
        })
    }

    return(
            <div className="cart-container">
                <h1>Time to order</h1>
                    <AddToCart cartItem={cartItem} handleCartChange={handleCartChange} handleCartSubmit={handleCartSubmit} />
                    <CartItems cartItems={cart} handleRemove={handleRemove}/>
            </div>
    )
}
