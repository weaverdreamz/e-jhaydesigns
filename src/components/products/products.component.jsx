import Button from '../button/button.component';
import './products.scss';
import { useSelector, useDispatch } from 'react-redux';
import { storedSelector } from '../../store/dataInformation/dataInformation.selector';
import { setDataInformation } from '../../store/dataInformation/dataInformation.action';
import { totalSelector, counterSelector } from '../../store/dataInformation/dataInformation.selector';

let count= 0;
let total= 0;




const Productss = ({products})=>{
    const dispatch = useDispatch();
    let storedData = useSelector(storedSelector);
    const {id, name, imageUrl, price} = products;
    
    count=useSelector(counterSelector);
    total=useSelector(totalSelector);
    
    const addStore = ()=>{
      
        total=total+price;
        const findData = storedData.find((fiind)=>products.id===fiind.id);
        
        if(findData){
            return storedData.map((found)=>found.id===products.id?{...found, quantity:found.quantity+1}:found)
        }
        count=count+1;
        return [...storedData, {...products, quantity:1}];

    }

    const addToCartHandler = ()=>{
        const updateStore = addStore();
        dispatch(setDataInformation(count, total, updateStore));
    }

    return(
        <div className='productss'>
            <img src={imageUrl} alt={name}/>
            <Button className='addToCart'  children="Add To Cart" type='button'  onClick={addToCartHandler}/>
            <div className='footer'>
                <h5>{name}</h5>
                <h5><span className='naira'>N</span>{price}</h5>
            </div>
            
        </div>
    )
}
export default Productss;


