import './categoryPreview.scss';
import myProducts from "../../products"
import Productss from '../products/products.component';
import { useSelector } from 'react-redux';
import { categorySelector } from '../../store/categories/categories.selector';
import { Link } from 'react-router-dom';
import LoadChild from '../loading/loading.component';

const CategoryPreview = ()=>{

    const ourCategory = useSelector(categorySelector);
    const select = ourCategory.casuals;
    
    return(
        <div>

            {
                select===undefined?(<LoadChild/>):(
                    Object.keys(ourCategory).map((name)=>{

                        return(
                            <div className='previews' key={name}>
                                <Link to={name.toLocaleLowerCase()}><h2>{name.toLocaleUpperCase()}</h2></Link>
                                <div className='gorypreview'>

                                    {
                                        ourCategory[name]
                                        .filter((_,idx)=>idx<4)
                                        .map((categoryProduct)=><Productss key ={categoryProduct.id} products={categoryProduct}/>)
                                        
                                    }
                                </div>
                            </div>
                            
                        )

                    })
                )
            }

              

        </div>
    )
}
export default CategoryPreview;