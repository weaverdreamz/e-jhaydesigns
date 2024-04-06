import './paymentform.scss';
import Button from '../button/button.component';
import Input from '../input/input.component';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { totalSelector } from '../../store/dataInformation/dataInformation.selector';
import { useDispatch } from 'react-redux';
import { setDataInformation } from '../../store/dataInformation/dataInformation.action';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { storedSelector } from '../../store/dataInformation/dataInformation.selector';
import emailjs from '@emailjs/browser';

const defaultVal = {name:'', email:'', address:'', phone:''};




const Paymentform = ()=>{

    const [payment, setPayment] = useState(defaultVal);
    const {name, email, address, phone} = payment;
    const total = useSelector(totalSelector);
    const dispatch = useDispatch();
    const cartItems = useSelector(storedSelector);

    const sendMessage = ()=>{
      const templateParams = {
        to_name:"MADEBYJHAY",
        from_name: name,
        message: `Customer Name: ${name}, Customer Email: ${email}, Customer Nearest Bus Stop: ${address}, Customer Phone Number: ${phone},  Items Bought:  ${cartItems.map((bought)=>bought.name)}`
      };
      
      emailjs
        .send('service_090999', 'template_92osu0q', templateParams, {
          publicKey: 'vKMXZcDAiKaTBNDOd',
        })
        .then(
          (response) => {
            alert('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          },
        );
    }

    const inputHandler = (event)=>{

        const {name, value} = event.target;
        setPayment({...payment, [name]:value})
    }

    const flutterKey = (process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY)

    const config = {
        public_key: flutterKey,
        tx_ref: Date.now(),
        amount: total,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
           phone_number: phone,
          name: name,
          address:address,
        },
        customizations: {
          title: 'Made By Jhay Payment',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    



      return(
        <div className='paymentform'>

            <form>
                <h3>Payment Details</h3>

                <h5 className='first'>Full Name</h5>
                <Input name='name' value={name} type='text' required onChange={inputHandler}/>
                <h5 className='second'>Email</h5>
                <Input name='email' value={email} type='email' required onChange={inputHandler}/>
                <h5 className='third'>Nearest Bus stop</h5>
                <Input name='address' value={address} type='text' required onChange={inputHandler}/>
                <h5 className='fourth'>Phone</h5>
                <Input name='phone' value={phone} type='number' required onChange={inputHandler}/>
                <Button type='button' children='Pay Now' className='signed' onClick={() => {
                handleFlutterPayment({
            callback: (response) => {
               console.log(response);
               sendMessage();
               setPayment(defaultVal);
               dispatch( setDataInformation(0,0,[]));
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {alert("You closed payment, so it is incomplete")},
          });
        }}/>
            </form>

        </div>
    )


}

    

    

            
    

    

     
        

export default Paymentform;