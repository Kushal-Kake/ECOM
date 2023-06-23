import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "../Header/Header";
import Item from "../Item/Item";
import './main.css'


const Main = () => {
    const [bestSeller, setBestSeller] = useState([])
        const [oldSchool, setOldSchool] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1337/api/best-sellers').then((bestSeller) => {
            setBestSeller(bestSeller.data.data)
        }).catch(() => {

        }).finally(() => {

        });
        axios.get('http://localhost:1337/api/old-schools').then((oldSchool) => {
            setOldSchool(oldSchool.data.data)
        }).catch(() => {

    }).finally(() => {

    })
    }, []);
    return(
        <div>
            <Header />
            <section className="main">
                <article><h3>Best Sellers</h3></article>
                {bestSeller.map((item, key) => {
                  return  <Item title={item.attributes.title} description={item.attributes.description} price={item.attributes.price}/>
                })}
                <article><h3>Old Schools</h3></article>
                {oldSchool.map((item, key) => {
                   return <Item title={item.attributes.title} description={item.attributes.description} price={item.attributes.price}/>
                })}
            </section>
        </div>
    )
}

export default Main