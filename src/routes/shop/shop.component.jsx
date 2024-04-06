import './shop.scss';
import {Routes, Route} from "react-router-dom";
import CategoryPreview from "../../components/categoryPreview/categoryPreview.component";
import { useEffect } from 'react';
import {getCategories} from "../../backends/firebase/firebase";
import { useDispatch} from 'react-redux';
import { updateCategories } from '../../store/categories/categories.action';
import ShopCategories from '../../components/shopcategories/shopcategories.component';
const Shop = ()=>{

    const dispatch = useDispatch()   

    useEffect(()=>{
        const myCategory = async()=>{
            const categorys = await getCategories();
            dispatch(updateCategories(categorys))
        }

        myCategory();
    })

   
    return(
        <div>
            <Routes>
                <Route index element={<CategoryPreview/>}/>
                <Route path=":category" element={<ShopCategories/>}/>
            </Routes>
        </div>
    )
}
export default Shop