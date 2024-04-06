import './mobilemenu.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMobileMenu } from '../../store/mobilemenu/mobilemenu.action';
import { Signout } from '../../backends/firebase/firebase';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';
import Home from '../../assets/home.png';
import Call from '../../assets/contact.png';
import Transaction from '../../assets/transactions.jpg';
import Shop from '../../assets/shop.png';
import Settings from '../../assets/settings.png';
import Check from '../../assets/checkuser.png';
import Login from '../../assets/rounded.png';


const Mobilemenu = ()=>{
    const dispatch = useDispatch();
    const closeHandler = ()=>{
        dispatch(setMobileMenu(false))
    }
    const logoutHandler =()=>{
        dispatch(setMobileMenu(false))
        Signout()
    }
    const currentUser = useSelector(userSelector);
    return(
        <div className='mobilemenu'>
            <div className='close' onClick = {closeHandler}>X</div>

            <Link className='links' to='/' onClick={closeHandler}>
                <img src={Home} alt ="home"/>HOME
            </Link>

            <Link className='links' to='shop' onClick={closeHandler}>
            <img src={Shop} alt ="shop"/>SHOP
            </Link>
            
            {
                currentUser?(<Link className='links' to='/' onClick={logoutHandler}>
                    <img src ={Login} alt='login'/>
                LOGOUT
            </Link>):(<Link className='links' to='auth' onClick={closeHandler}>
                <img src={Login} alt='login'/>
                SIGNIN
            </Link>)
            }

            {
                currentUser?(<Link className='links' to='/' onClick={logoutHandler}>
                    <img src={Transaction} alt='transaction'/>
                TRANSACTIONS
            </Link>):''
            }

            {
                currentUser?(<Link className='links' to='/' onClick={logoutHandler}>

                    <img src={Settings} alt='settings'/>
                SETTINGS
                
            </Link>):''
            }
            
            <Link className='links' to='contact' onClick={closeHandler}>
                <img src={Call} alt='contact'/>
                CONTACT
            </Link>

            {
                currentUser?(<Link className='links' to='auth/dashboard' onClick={closeHandler}>
                <img src={Check} alt='checkout'/>
                CHECKOUT
            </Link>):( <Link className='links' to='checkout' onClick={closeHandler}>
            <img src={Check} alt='checkout'/>
                CHECKOUT
            </Link>)
            }


        </div>
    )

}
export default Mobilemenu