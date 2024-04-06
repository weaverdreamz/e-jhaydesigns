import { Routes, Route } from "react-router-dom";
import AutheSignup from "../../components/authesignup/authesignup.component";
import UserDashboard from "../dashboard/userDashboard.component";

const SmartSignup = ()=>{

    return(
        <div className='smartsignup'>
            <Routes>
                <Route index element={<AutheSignup/>}/>
                <Route path='dashboard/*' element={<UserDashboard/>}/>
            </Routes>
        </div>
    )

}
export default SmartSignup;