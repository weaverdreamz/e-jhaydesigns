import { Link } from 'react-router-dom';
import './navigation.scss';
import Icons from '../cartIcon/cartIcon.component';
import Cart from '../cart/cart.component';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../store/cartRedux/cart.selector';
import { userSelector } from '../../store/user/user.selector';
import { Signout } from '../../backends/firebase/firebase';


//THIS IS THE NAVIGATION COMPONENT FOR DEVICE FOR BIG SCREEN (LAPTOPS)

const Bnav = ()=>{

    const displayCart = useSelector(cartSelector)
    const currentUser = useSelector(userSelector);
        return(
        <div>
        <div className='Bnav'>
            
            <Link className='h1' to='/'><h4>MADE BY JHAY</h4></Link>
            <div className={`${currentUser?'adjust-menu':' nav-menu'}`}>
                <Link className='navs' to='shop'>SHOP</Link>
                <Link className='navs' to='contact'>CONTACT</Link>
                
                    {
                        currentUser?(<Link className='navs' to=''>TRANSACTIONS</Link>):""
                    }

                    {
                        currentUser?( <Link className='navs' to=''>SETTINGS</Link>):""
                    }
                
               
                {
                    currentUser?(<Link className='navs' to='/' onClick={Signout}>LOGOUT</Link>):(<Link className='navs' to='auth'>SIGNIN</Link>)
                }
                <Icons/>
            </div>
        </div>
        {
            displayCart&&<Cart/>
        }
       
        </div>

    )

}
export default Bnav