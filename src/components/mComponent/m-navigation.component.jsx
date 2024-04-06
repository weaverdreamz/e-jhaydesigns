import {Link} from 'react-router-dom';
import Icons from "../cartIcon/cartIcon.component";
import Mobilemenu from '../mobilemenu/mobilemenu.component';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileMenu } from '../../store/mobilemenu/mobilemenu.action';
import { mobileSelector } from '../../store/mobilemenu/mobilemenu.selector';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../../store/user/user.selector';
import './m-navigation.scss';
//THIS COMPONENT IS FOR SMALLER SCREEN NAVIGATION MENU (SMARTPHONES AND SMALL SCREEN IPAD MINI);

const MobileNav = ()=>{

    const navigate = useNavigate();
    const currentUser = useSelector(userSelector);
    

    const iconHandler = ()=>{
        navigate("checkout");
    }

    const dashboardHandler = ()=>{
        navigate("auth/dashboard")
    }

    const dispatch = useDispatch()
    const displayMenu = useSelector(mobileSelector);
    const menuHandler = ()=>{
        dispatch(setMobileMenu(true));
    }
    
    return(
        <div>
            <div className = 'm-Nav'>
                <div className='horizontal' onClick={menuHandler}>
                    <div className='h-menus'></div>
                    <div className='h-menus'></div>
                    <div className='h-menus'></div>
                </div>
                <Link className='h' to='/'><h2>MADE BY JHAY</h2></Link>
                {
                    currentUser?(<div className='myIcon' onClick={dashboardHandler}>
                    <Icons/>
                </div>):(<div className='myIcon' onClick={iconHandler}>
                    <Icons/>
                </div>)
                }
                
            </div>
            {
                displayMenu&&<Mobilemenu/>
            }
            
        </div>
    )
}
export default MobileNav