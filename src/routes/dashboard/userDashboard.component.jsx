import './userDashboard.scss';
import { Route, Routes } from 'react-router-dom';
import Dashcheckout from '../../components/Dashcheckout/dashcheckout.component';
import AuthPayment from "../../components/authpayment/authpayment.component";





const UserDashboard = ()=>{
    
    return(
        
        <div className='dashboard'>

            <Routes>
                <Route index element={<Dashcheckout/>}/>
                <Route path='payment' element={<AuthPayment/>}/>
            </Routes>
            
                
            
        </div>
    )

}
export default UserDashboard;