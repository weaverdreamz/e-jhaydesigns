import './loading.scss';
import { Fragment } from 'react';

const LoadChild = ()=>{

    return(
            <Fragment>
        
                <div className='load'>
                    Loading
                    <div className='loadchild'></div>
                </div>
            </Fragment>
    )

}
export default LoadChild
