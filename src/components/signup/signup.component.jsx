//THIS IS THE SIGNUP COMPONENT FOR DEVICES WITH BIGGER WIDTH THAN SMARTPHONES


import './signup.scss';
import Button from '../button/button.component';
import Input from '../input/input.component';
import { useState } from 'react';
import { createAuthUserWithEmail, createUserDocument } from '../../backends/firebase/firebase';
import { useNavigate } from 'react-router-dom';


const defaultVal = {displayName:'', email:'', password:'', confirmPassword:''};

const Signup = ()=>{

    const navigate = useNavigate();

    
    const [inputVal, setInputVal] = useState(defaultVal);
    const {displayName, email, password, confirmPassword} = inputVal;
    const [able, setAble] = useState(false);

    const [passwordtype, setPasswordType] = useState('password');
    const [confirm, setConfirm] = useState('password');
    const [hide, setHide] = useState('Show');
    const [cHide, setCHide] = useState('Show');
    const [width, setWidth] = useState('87%');
    const [cWidth, setCWidth] = useState('87%');

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

    const confirmShow = (event)=>{

        

        if(event.target.previousElementSibling.type==='password'){
            setConfirm('text');
            setCHide('Hide');
            setCWidth('87%');
            
            
        }
        else{

            setConfirm('password');
            setCHide('Show')
            setCWidth('87%');
            

        }

    }







    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setInputVal({...inputVal, [name]:value});
    }


    const submitHandler = async(event)=>{
        event.preventDefault();
        setAble(true)
        if(password!==confirmPassword){
            alert("Passwords does not match")
            setAble(false)
            return;
        }
        else if(password.length<8){
            alert("Weak Password");
            setAble(false)
            return;
        }

    
        try{
            const {user} = await createAuthUserWithEmail(email,password);
            await createUserDocument(user, {displayName})
            setInputVal(defaultVal);
            if(user){
                navigate("dashboard");

            }

        }
        catch(error){

            if(error.code==="auth/email-already-in-use"){
                alert("Email already exist")
            }
            else{
                console.log("There was problem creating user")
            }
        }
        setAble(false)
    }



    return(
        <div className='signup'>
            <form onSubmit ={submitHandler}>
                <h3>I do not have an account</h3>
                <p>Signup with your email and password</p>
                <h5 className='first'> Display Name </h5>
                <Input type='text' required value={displayName} onChange={changeHandler} name='displayName'/>
                <h5 className='second'> Email </h5>
                <Input type='email' required value={email} onChange={changeHandler} name='email'/>
                <h5 className='third'> Password </h5>
                <Input type={passwordtype} required value={password} onChange={changeHandler} name='password' style={{width:`${width}`}}/><span className='show' onClick={show}>{hide}</span>
                <h5 className='fourth'> Confirm Password </h5>
                <Input type={confirm} required value={confirmPassword} onChange={changeHandler} name='confirmPassword' style={{width:`${cWidth}`}}/><span className='show' onClick={confirmShow}>{cHide}</span>
                <Button children='SIGNUP' type='submit' className='signed' disabled={able}/>
            </form>

        </div>
    )

}


export default Signup