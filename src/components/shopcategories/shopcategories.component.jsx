import "./shopcategories.scss";
import { useSelector } from 'react-redux';
import { categorySelector } from '../../store/categories/categories.selector';
import Productss from '../products/products.component';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import LoadChild from "../loading/loading.component";

const ShopCategories = ()=>{
    const ourCategories = useSelector(categorySelector);
    const {category} = useParams();
    const [shopCategory, setShopCategory] = useState(ourCategories[category]);
    
    const select = ourCategories.casuals;
    console.log(select);

    useEffect(()=>{

        setShopCategory(ourCategories[category])

    },[shopCategory, ourCategories])

    return(
        <div className="shopcategories">           
            {
                select===undefined?(<LoadChild/>):(shopCategory&&shopCategory.map((storedata)=>{
                    return <Productss key={storedata.id} products={storedata}/>                         
                }))
            }

        </div>
    )

}
export default ShopCategories

