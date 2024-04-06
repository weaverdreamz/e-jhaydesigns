//THIS COMPONENT IS THE INDEX ROUTE FOR THE AUTHENTICATION ROUTE
import './authpage.scss';
import Signin from '../signin/signin.component';
import Signup from '../signup/signup.component';

const AuthPage = ()=>{
    return(
        <div className='authpage'>
              <Signin/>
              <Signup/>
        </div>
      
    )

}

export default AuthPage

