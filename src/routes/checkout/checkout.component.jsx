import Checkout from "../../components/checkouts/checkouts";
import GuestPayment from "../../components/guestpayment/guestpayment.component";
import { Routes, Route } from "react-router-dom";



const CheckoutPage = ()=>{

    return(
        <div className='checkoutpage'>
            <Routes>
                <Route index element={<Checkout/>}/>
                <Route path='guestpayment' element={<GuestPayment/>}/>
                
            </Routes>
            
        </div>
    )

}
export default CheckoutPage;