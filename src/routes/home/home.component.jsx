import'./home.scss';
import Slider from '../../components/imageSlider/imageslider.component';
import Categorie from '../../components/categoriesNcontainer/categorie.component';


const Home = ()=>{
    return(
        <div className='home'>
            <Slider/>
            <Categorie/>
        </div>
    )
}
export default Home