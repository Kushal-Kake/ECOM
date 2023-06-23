

import { useContext } from 'react'
import './header.css'
import { CartContext } from '../context/cart-context'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {cartData} = useContext(CartContext)
    const navigate = useNavigate()
    console.log(cartData)
    return(
        <div>
            <nav className="navbar">
                <div className="log">
                    10 X Game Site
                </div>
                <hr />
                <div onClick={() => navigate('/cart')}>
                    <span>{cartData.length}</span>
                    <i className="fa  fa-shopping-cart"></i>
                </div>
            </nav>
        </div>
    )
}

export default Header