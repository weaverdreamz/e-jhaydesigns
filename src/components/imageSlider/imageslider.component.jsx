//THIS COMPONENT IS FOR IMAGE SLIDER;

import './imageslider.scss';
import shirt from '../../assets/casuals.png';
import jacket from '../../assets/jacket1.png';
import hoodie from '../../assets/hoodie2.png';
import trouser from '../../assets/side.jpg';

import {useState, useEffect} from 'react';

const Slider = ()=>{
    const [slider, setSlider]= useState(0);
    const images = [hoodie, trouser, jacket, shirt];
    const imageText = ["HOODIES", "JOGGERS", "JACKETS", "CASUALS"];
    const colour = ["#000000", "#000000", "rgb(25, 42, 56)", "rgb(1, 61, 1)" ]

    const sliderHandler = ()=>{
        setSlider(slider=>(slider+1)%images.length)
    }

    useEffect(()=>{

        const held = setInterval(sliderHandler, 5000);
        return()=>clearInterval(held);
    })
     

    return(
        <div className='slider'>
            <img src={images[slider]} alt="categories"/>
            <div className='overlay'>
            <h2 style={{color:`${colour[slider]}`}}>{imageText[slider]}
                <p>Order Now</p>
            </h2>
            </div>
           


        </div>
    )

}
export default Slider;