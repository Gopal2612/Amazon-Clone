import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './StateProvider';
import { getbaskettotal } from './reducer';

function Subtotal() {
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />this order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getbaskettotal(basket)}
            displayType={"text"}
            prefix={"$"}
            thousandSeparator={true}
            />
           

           
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
