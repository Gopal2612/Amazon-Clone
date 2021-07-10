import React from 'react'
import ad from './ad.jpg'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";

function Checkout() {
const [{basket}]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src={ad} alt="ad"/>

            {basket?.length=== 0 ? (
                <div>
                    <h2>your basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">your shopping basket</h2>
                    {/* list all of items in basket */}
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal/>
                    
                    </div>
            )}
        </div>
    )
}

export default Checkout
