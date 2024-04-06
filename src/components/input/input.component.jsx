//THIS IS THE RE-USABLE INPUT COMPONENT

import './input.scss';
import {Fragment} from 'react';

const Input = ({...otherProps})=>{
    return(
        <Fragment>
            <input {...otherProps}/>
        </Fragment>
    )
}
export default Input