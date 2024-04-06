import './checkoutItems.scss';
import { useSelector, useDispatch } from 'react-redux';
import { storedSelector, counterSelector, totalSelector} from '../../store/dataInformation/dataInformation.selector';
import { setDataInformation } from '../../store/dataInformation/dataInformation.action';


const CheckoutItems = ({items})=>{

    let total = useSelector(totalSelector);
    let count = useSelector(counterSelector);
    let storeItems = useSelector(storedSelector);
    const dispatch = useDispatch();


    const addedQuantity = ()=>{
        total=total+price
        const check = storeItems.find((checked)=>checked.id===items.id);
        if(check){
            return storeItems.map((found)=>found.id===items.id?{...found, quantity:quantity+1}:found);
        }

        count=count+1
        return [...storeItems, {...items, quantity:1 }];
    }

    const increeQuantity = ()=>{
        const increased = addedQuantity();
        dispatch(setDataInformation(count, total, increased));
    }

    const subtractQuantity = ()=>{
        const checks = storeItems.find((checked)=>checked.id===items.id);

        if(checks.quantity===1){
            count=count-1;
            total=total-(checks.quantity*price); 
           return storeItems.filter((itemss)=>itemss.id!==items.id);
        }

        total=total-price;
        return storeItems.map((found)=>found.id===items.id?{...found, quantity:quantity-1}:found);

    }
    const decreeQuantity = ()=>{
        const decreased = subtractQuantity();
        dispatch (setDataInformation(count, total, decreased));
    }

    const itemRemoved = ()=>{
      
        count= count-1;
        total=total - (price*items.quantity);
        return storeItems.filter((remove)=>remove.id!==items.id);

    }

    const removeProduct = ()=>{
        const removeItem = itemRemoved();
        dispatch(setDataInformation(count, total, removeItem));
    }

         
    

    const {id, name, quantity, price, imageUrl} = items;
   
    
    return(
                <div className='checked'>
                    <div className='checkedi'><img src={imageUrl} alt={name}/></div>
                    <div className='checkedi texts'>{name}</div>
                    <div className='checkedi texts'> <span className='ltag' onClick={decreeQuantity}>&lt;</span> {quantity} <span className='rtag' onClick={increeQuantity}>&gt;</span> </div>
                    <div className='checkedi texts'>{price}</div>
                    <div className='checkedi texts' onClick = {removeProduct}>&#10005;</div>
                </div>

    )

}
export default CheckoutItems;