import './cartItems.scss';

const CartItems = ({Items})=>{

    const {quantity, price, imageUrl, name} = Items;

    return(
        <div className='cartitems'>
            <div className='image'>
             <img src={imageUrl} alt={name}/>
            </div>

            <div className='footer'>
                <h5>{name}</h5>
                <p>{`${quantity} x N${price}`}</p>
            </div>
            
        </div>
    )

}
export default CartItems;