import './contact.scss';
import {useState} from 'react';
import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import emailjs from '@emailjs/browser';


const defaultVal = {name:'', email:'', textspace:''};

const Contact = ()=>{
    
    const [contact, setContact] = useState(defaultVal);
    const {name, email, textspace} = contact;

    const inputHandler = (event)=>{
        const {name, value} = event.target;
        setContact({...contact, [name]:value});
    }

    console.log(textspace);

    const sendMessage = ()=>{

        const templateParams = {
          to_name:"MADEBYJHAY",
          from_name: name,
          message: `Customer Name: ${name}, Customer Email: ${email}, Message: ${textspace}`
        };
        
        emailjs
          .send('service_090999', 'template_92osu0q', templateParams, {
            publicKey: 'vKMXZcDAiKaTBNDOd',
          })
          .then(
            (response) => {
              alert('SUCCESS!', response.status, response.text);
              setContact(defaultVal);
            },
            (err) => {
              console.log('FAILED...', err);
            },
          );
         
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
                <textarea name='textspace' placeholder="How may we help you?" value={textspace} onChange={inputHandler} />
                <Button type='button' children='CONTACT' className='signed' onClick={sendMessage}/>

            </form>
        </div>
    )
}

export default Contact;