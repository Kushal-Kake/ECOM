import { useContext } from "react"
import { CartContext } from "../context/cart-context"
import './item.css'



const Item = (item) => {
    const {addToCart} = useContext(CartContext)
    return(
        <div>
            <section className="card">
                <img className="card-image" src={item?.image} alt="game" />
                <article className="title" ><h4>{item.title}</h4></article>
                <article className="description"> {item.description} </article>
                <section className="card-footer">
                    <article className="card-price"><h5>Rs. {item.price}</h5> </article>
                    <button className="card-button" onClick={() => addToCart(item)}>Add to cart</button>
                </section>
            </section>
        </div>
    )
}

export default Item



/**
 *   const deleteHandler = (indexValue) => {
        const newTodos = todos.filter((todo, index) => index !== indexValue)
        setTodos(newTodos)
    }

    <div>
        {todolist.map((todo, index) => <div key={index}>
            <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
        </div>)
 */