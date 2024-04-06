//THIS IS THE SIGNIN COMPONENT

import Input from "../input/input.component";
import { useState } from "react";
import './signin.scss';
import Button from "../button/button.component";
import SignHere from "../signhere/signhere.component";
import { signInWithGooglePopup, allowUserToAccess} from "../../backends/firebase/firebase";
import { useNavigate } from "react-router-dom";




const formDefault = {email:'', password:''};

const Signin = ()=>{

    const navigate = useNavigate();

    const [formInput, setFormInput] = useState(formDefault);
    const {email, password} = formInput;

    const [googleable, setGoogleAble] = useState(false);
    const [able, setAble] = useState(false);

    const [passwordtype, setPasswordType] = useState('password');
    const [hide, setHide] = useState('Show');
    const [width, setWidth] = useState('87%');


    const show = (event)=>{

       
        if(event.target.previousElementSibling.type==='password'){
            setPasswordType('text');
            setHide('Hide');
            setWidth('87%')
        }
        else{

            setPasswordType('password');
            setHide('Show')
            setWidth('87%')

        }

    }
  

    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setFormInput({...formInput, [name]:value});
        
    };

    const googleHandler = async()=>{


        setGoogleAble(true);
        const {user} = await signInWithGooglePopup();
        setGoogleAble(false)
        if(user){
            navigate("dashboard");

        }
       
    };  
    
    const signHandler = async(event)=>{

        event.preventDefault();

        setAble(true);

        try{

            const {user} = await allowUserToAccess(email, password)
            setFormInput(formDefault);
            if(user){
                navigate("dashboard");

            }

        }
        catch(error){

            switch(error.code){
                case "auth/invalid-login-credentials":
                    alert("Incorrect password or email");

                    break;

                default:
                    console.log(error);
            }

            setAble(false);

           

        }

    }


    return(
        <div className='signin'>
            <form onSubmit={signHandler}>
                <h3>I already have an account</h3>
                <p>Signin with your email and password</p>
                <h5 className='first'> Email</h5>
                <Input name='email' value={email} required type='email' onChange={changeHandler}/>
                <h5 className='second'>Password</h5>
                <Input name='password' value={password} required type={passwordtype}  onChange={changeHandler} style={{width:`${width}`}}/><span className='show' onClick={show}>{hide}</span>
                <Button type='submit' children='SIGNIN' className='signed' disabled={able}/>
                <Button type='button' children='SIGNIN WITH GOOGLE' className='google' onClick={googleHandler} disabled={googleable}/>
                <SignHere/>
                
            </form>

        </div>
      
    )
}
export default Signin;