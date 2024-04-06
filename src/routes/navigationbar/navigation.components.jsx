import Bnav from '../../components/nav/navigation.component';
import MobileNav from '../../components/mComponent/m-navigation.component';
import {Outlet} from 'react-router-dom';

import './navigation.scss';

export const Nav = ()=>{
    return(
        <div className='nav'>
            <Bnav/>
            <MobileNav/>
            <Outlet/>
    </div> 
    )
}
export default Nav