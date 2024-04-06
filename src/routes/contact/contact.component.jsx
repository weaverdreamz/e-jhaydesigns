import './contact.scss';
import {useState} from 'react';
import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

const defaultVal = {name:'', email:''};

const Contact = ()=>{

    const [contact, setContact] = useState(defaultVal);
    const {name, email} = contact;

    const inputHandler = (event)=>{
        const {name, value} = event.target;
        setContact({...contact, [name]:value});
    }
    
    return(
        <div className='contact'>

            <p>You can contact us with your own desired design through our hotline:08159168525, 08169699954 or through Whatsapp:08159168525</p>
            
            <form>

           
                <h3>Contact Us:</h3>

                <h5 className='first'>Full Name</h5>
                <Input name='name' value={name} type='text' required onChange={inputHandler}/>
                <h5 className='second'>Email</h5>
                <Input name='email' value={email} type='email' required onChange={inputHandler}/>
                <textarea name='complaint' placeholder="How may we help you?"/>
                <Button type='button' children='CONTACT' className='signed'/>

            </form>
        </div>
    )
}

export default Contact;