import React, {useState} from 'react'
import AddToCart from './AddToCart'
import CartItems from './CartItems'
import './Shopping.css'

export default function Shopping(){

    const [cartItem, setCartItem] = useState("")
    const [cart, setCart] = useState([
                        {
                            name: "Olive Oil",
                            quantity: 1,
                            confirmChoice: true
                        }
                        ])

    const handleCartChange = (e) => {
        setCartItem(e.target.value)
        }

    const handleCartSubmit = () => {
        const newCartItem = {
            name: cartItem,
            quantity: 1,
            confirmChoice: true
        }
        setCart(prevCart => {
            return [...prevCart, newCartItem]
        })
        setCartItem("")
    }

    const handleRemove = (itemToRemove) => {
        setCart(prevCart => {
            const filteredCart = prevCart.filter(item => item.name!==itemToRemove.name) 
            return filteredCart
        })
    }

    const handleCheck = (name) => {
        // console.log("handleCheck running")
        setCart(prevCart => {
            const filteredCart = prevCart.map((item, _index) => {
                if (item.name===name) {
                    item.confirmChoice=!item.confirmChoice
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
                    <CartItems cartItems={cart} handleRemove={handleRemove} handleCheck={handleCheck}/>
            </div>
    )
}
