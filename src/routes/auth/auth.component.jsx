//THIS IS THE COMPONENT THAT DISPLAYS OUR AUTHENTICATION COMPONENTS (SIGNIN, SIGNUP AND SIGNIN WITH GOOGLE);

import AuthPage from '../../components/auth-page/authpage.component';
import './auth.scss';
import { Routes , Route} from 'react-router-dom';
import UserDashboard from '../dashboard/userDashboard.component'



const Auth = ()=>{
    return(
        <div className='auth'>
            <Routes>
                <Route index element={<AuthPage/>}/> 
                <Route path='dashboard/*' element={<UserDashboard/>}/>          
                
            </Routes>
           
        </div>
    )
}
export default Auth;