import { Fragment } from 'react';
import './cart.scss';
import {useSelector, useDispatch} from 'react-redux';
import { cartSelector } from '../../store/cartRedux/cart.selector';
import { setDisplayCart } from '../../store/cartRedux/cart.action';
import { storedSelector } from '../../store/dataInformation/dataInformation.selector';
import CartItems from '../cartItems/cartItems.component';
import Button from '../button/button.component';
import { useNavigate, Link } from 'react-router-dom';
import { userSelector } from '../../store/user/user.selector';


const Cart = ()=>{
    const dispatch = useDispatch()
    const displayCart = useSelector(cartSelector);
    const navigate =useNavigate();
    const currentUser = useSelector(userSelector);

    const checkoutHandler = ()=>{
        dispatch(setDisplayCart(!displayCart))
        navigate("checkout")
    }

    const cartHandler = ()=>{
        dispatch(setDisplayCart(!displayCart))
        
    }

    let Items = useSelector(storedSelector)
    return(
        <Fragment>
            <div className='cart'>
                <div className='cartContainer'>
                    {
                        Items.map((cart)=>{
                            return <CartItems key={cart.id} Items={cart}/>
                        })

                    }


                </div>
                {
                
                    currentUser?(<Link to='auth/dashboard'><Button className='addToCart'  children="CHECKOUT" type='button' onClick={cartHandler}/></Link>):(<Button className='addToCart'  children="CHECKOUT" type='button' onClick={checkoutHandler}/>)
                
                }

                
             
            </div>

        </Fragment>
      
    )
}
export default Cart