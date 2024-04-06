import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigationbar/navigation.components";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import CheckoutPage from "./routes/checkout/checkout.component";
import SmartSignup from "./routes/smartsignup/smartsignup.component";
import Contact from "./routes/contact/contact.component"

import { whenAuthStateChange, createUserDocument} from "./backends/firebase/firebase";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch} from "react-redux";


const App = ()=>{
    const setUser = useDispatch();
    useEffect(()=>{
        const unSubscribe = whenAuthStateChange((user)=>{
            if(user){
                createUserDocument(user);
               
            }  
            setUser(setCurrentUser(user))  
        })
        return unSubscribe;
    })


    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path='auth/*' element={<Auth/>}/>
                    <Route path='shop/*' element={<Shop/>}/>
                    <Route path='checkout/*' element={<CheckoutPage/>}/>
                    <Route path='authe/*' element={<SmartSignup/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    
                </Route>
            </Routes>
        </div>
    )
}
export default App