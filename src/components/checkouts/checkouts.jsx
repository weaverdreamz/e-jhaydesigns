import CheckoutItems from '../checkoutItems/checkoutItems.component';
import { useSelector } from 'react-redux';
import { storedSelector, totalSelector} from '../../store/dataInformation/dataInformation.selector';
import './checkouts.scss';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../../store/user/user.selector';


const Checkout = ()=>{ 
    
    const checkoutItems = useSelector(storedSelector);
    const checkoutTotal = useSelector(totalSelector);
    const currentUser = useSelector(userSelector);
    const navigate = useNavigate();

    const guestPayment = ()=>{
        navigate("guestpayment");
    }

    const userPayment = ()=>{
        navigate("payment")
    }

    return(
        
        <div className='Checkout'>

           
         
            <div className='header-container'>
              <div className='heading'> Product</div>
              <div className='heading'>Description</div>
              <div className='heading'>Quantity</div>
              <div className='heading'>Price</div>
              <div className='heading'>Remove</div>
            </div>
            <hr/>
            {
                checkoutItems.map((checkoutItem)=>{
                    return <CheckoutItems items={checkoutItem}/>
                })
            }
            <div className='total'>{`Total: ${checkoutTotal}`}</div>
            <div className='payment'>
                {
                    currentUser?(<Button className='addToCart'  children="Make Payment" type='button' onClick={userPayment}/>):(<Button className='addToCart'  children="Make Payment" type='button' onClick={guestPayment}/>)
                }
                
            </div>
        </div>
    )
}
export default Checkout