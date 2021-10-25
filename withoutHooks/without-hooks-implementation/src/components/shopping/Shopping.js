import React from 'react'
import CartItems from './CartItems'
import './Shopping.css'

export default class Shopping extends React.Component{
    constructor(){
        super()
        this.state={
            cartItem: "",
            cart: [
                {
                    name: "Olive Oil",
                    quantity: 1
                }
                ]
        }
    }

    handleCartChange = (e) => {
        this.setState({cartItem: e.target.value})
        }

    handleCartSubmit = () => {
        const newCartItem = {
            name: this.state.cartItem,
            quantity: 1
        }
        this.setState(prevState => {
            return {
                ...prevState,
                cart: [...prevState.cart, newCartItem]
            }
        })
        this.setState({cartItem:""})
    }

    handleRemove = (itemToRemove) => {
        this.setState(prevState => {
            const filteredCart = prevState.cart.map(item => {
                if (item.name===itemToRemove.name) {
                    item.quantity=0
                }
                return item
            })
            return {
                ...prevState,
                cart: filteredCart
            }
        })
    }

    render(){
        const { cart, cartItem } = this.state

        return(
            <div className="cart-container">
                <h1>Time to order</h1>
                <div className="cart-input-container">
                    <input 
                        onChange={this.handleCartChange}
                        name='cartInput' 
                        type='text'
                        placeholder="Add product to your cart"
                        value={cartItem}
                    />
                    <button className="add-cart-button" onClick={this.handleCartSubmit}>Add to cart</button>
                </div>
                <div className="cart-list">
                    <h2>Your cart {cart.every(item => item.quantity ===0) ? "is empty" : ""}</h2>
                    <CartItems cartItems={cart} handleRemove={this.handleRemove}/>
                </div>
            </div>
        )
    }
}