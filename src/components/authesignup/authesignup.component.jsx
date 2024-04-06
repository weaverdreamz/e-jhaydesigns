import './authesignup.scss';
import Button from '../button/button.component';
import Input from '../input/input.component';
import { useState } from 'react';
import { createAuthUserWithEmail, createUserDocument } from '../../backends/firebase/firebase';
import { useNavigate } from 'react-router-dom';



const defaultVal =  {displayName:'', email:'', password:'', confirmPassword:''}


const AutheSignup = ()=>{

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
        setInputVal({...inputVal,  [name]:value})
    }

       
    const submitHandler = async(event)=>{
        event.preventDefault();
        setAble(true)
        if(password!==confirmPassword){
            alert("Password does not match");
            setAble(false);
            return;
        }

        else if(password.length<8){
            alert("Weak Password");
            setAble(false);
            return;
        }

        

        try{
            const {user} = await createAuthUserWithEmail(email, password);
            await createUserDocument(user, {displayName})
            setInputVal(defaultVal);

            if(user){
                navigate("dashboard")

            }
            

        }
        catch(error){

            if(error.code==="auth/email-already-in-use"){
                alert("Email already exist")
            }
            else{
                console.log("error encountered while creating user", error.message)
            }
            setAble(false)

        }

    }

    

    return(
        <div className="authe">

            <form onSubmit={submitHandler}>
                <h3>I do not have an account</h3>
                <p>Signup with your email and password</p>
                <h5 className='first'> Display Name </h5>
                <Input type='text' name='displayName' required onChange={changeHandler} value={displayName}/>
                <h5 className='second'> Email </h5>
                <Input type='email' name='email' required onChange={changeHandler} value={email}/>
                <h5 className='third'> Password </h5>
                <Input type={passwordtype} name='password' required onChange={changeHandler} value={password} style={{width:`${width}`}}/><span className='show' onClick={show} style={{color:`rgb(11, 39, 65)`}} >{hide}</span>
                <h5 className='fourth'> Confirm Password </h5>
                <Input type={confirm} name='confirmPassword' required onChange={changeHandler} value={confirmPassword} style={{width:`${cWidth}`}}/><span className='show' onClick={confirmShow}>{cHide}</span>
                <Button type='submit' className='signed' children='SIGNUP' disabled={able}/>
              

            </form>     


        </div>
    )

}
export default AutheSignup