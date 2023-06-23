import { useCallback, useContext } from "react"
import { CartContext } from "../context/cart-context"
import useRazorpay from "react-razorpay"

const Cart = () => {
    const {cartData} = useContext(CartContext)
    let total = 0;
    const Razorpay = useRazorpay();
    const razorpayDisplay = useCallback(async (total) => {
        const options = {
            key : "rzp_test_9Om5O4g0JIebdg",
            amount : total,
            currency : "INR",
            name: "Kushal Gaming Site",
            description: "Gaming Transaction",
            handler : (res) => {
                console.log(res)
            },
            prefill : {
                name: "Kushal",
                email: 'kakekushalkumar369@gmail.com',
                contact: 9121873735
            },
            notes : {
                address: 'Work Address India'
            },
            theme: {
                color: "#3399cc"
            },
        }
        const rzp1 = new Razorpay(options);
        rzp1.open()
    }, [Razorpay])
    return (
        <div>
            {cartData.map((item) => {
                return(
                    <div>
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                        <button >Remove from Cart</button>
                    </div>
                )
            })}
            <div>
                <article>Billing Information</article>
                {cartData.map((items) => {
                    total+= items.price
                    return<div>
                        <p>{items.title}   :   Rs.{items.price}</p>
                    </div>
                })}
                <article>Total  : ₹ {total}</article>
                <button onClick={() => razorpayDisplay(3000)}>Checkout</button>
            </div>
        </div>
    )
}
export default Cart