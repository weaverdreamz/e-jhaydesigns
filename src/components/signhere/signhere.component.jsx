//THIS IS THE COMPONENT THAT TAKES YOU TO THE SMARTPHONE SIGNUP ROUTE

import './signhere.scss';
import { Link } from 'react-router-dom';


const SignHere = ()=>{
    return(

        <div className='signhere'>
            <h4>
                I do not have an account, <Link to='/authe'><span className='signh'>Signup Here!</span></Link>
            </h4>
        </div>

    )
  
}
export default SignHere
