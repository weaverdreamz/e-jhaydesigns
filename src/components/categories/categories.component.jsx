import './categories.scss';
import { Link } from 'react-router-dom';

const Categories = ({info})=>{

    const {name, id, imgSrc, color } = info
    return(
        <div className='categories'>
            <img src={imgSrc} alt='categories'/>
            <div className='cartoverlay' key={id}>
            
                <Link  style={{color:`${color}`}} to ={`shop/${name.toLocaleLowerCase()}`}>

                <h2>

                    
                    {name}
                        <p>Order now</p>



                    </h2>

                </Link>


                
            </div>

        </div>
    )
}
export default Categories