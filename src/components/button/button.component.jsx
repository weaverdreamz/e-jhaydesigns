import './button.scss';
import {Fragment} from 'react';
import ButtonLoad from '../buttonloader/buttonload.component';

const Button = ({children, ...otherProps})=>{
    const loader= (otherProps.disabled);
    
    return(
        <Fragment>

            <button {...otherProps}>{loader?(<ButtonLoad/>):(children)}</button>

        </Fragment>

    )

}
export default Button