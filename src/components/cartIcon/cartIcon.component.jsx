import {ReactComponent as Icon} from '../../assets/004 shopping-bag.svg';
import { Fragment } from 'react';
import './cartIcon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayCart } from '../../store/cartRedux/cart.action';
import { cartSelector } from '../../store/cartRedux/cart.selector';
import { counterSelector } from '../../store/dataInformation/dataInformation.selector';
import { userSelector } from '../../store/user/user.selector';


const Icons = ()=>{
    const dispatch = useDispatch();
    const displayCart = useSelector(cartSelector);
    const counter = useSelector(counterSelector);
    const currentUser = useSelector(userSelector)
    const cartHandler = ()=>{
        dispatch(setDisplayCart(!displayCart))
    }
    
    return(
        <Fragment>
            
             
            <Icon className={`${currentUser?'iconss':'icons'}`} onClick={cartHandler}/>
            <span className={`${currentUser?'countt':'count'}`}>{counter}</span>
           
        </Fragment>
    )

}
export default Icons;