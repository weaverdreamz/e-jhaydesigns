import Checkout from "../checkouts/checkouts";
import './dashcheckout.scss';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';


const Dashcheckout = ()=>{

    const currentUser = useSelector(userSelector);

    return(
        <div className='dashcheckout'>

        {
                currentUser?(<h4 style={{fontFamily:`Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;` }}>{`WELCOME, ${currentUser.email.toLocaleUpperCase()}`}</h4>):""
            }
             
            <Checkout/>
        </div>
    )

}
export default Dashcheckout;