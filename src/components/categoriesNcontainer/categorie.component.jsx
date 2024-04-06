import './categorie.scss';
import YellowHoodie from '../../assets/yellow hoodie.png';
import Varsity from '../../assets/jacketvar.png';
import Plain from '../../assets/plainjoggers.jpg';
import Tnshirt from '../../assets/tshirtvot.png';
import Categories from '../categories/categories.component';

const Categorie = ()=>{
    const categorie = [{id:0, name:'JACKETS', imgSrc:Varsity, color:'rgb(63, 98, 131)'},{id:1, name:'HOODIES', imgSrc:YellowHoodie, color:'rgb(189, 176, 160)'},{id:2, name:"JOGGERS", imgSrc:Plain, color:'rgb(160, 142, 121)'},{id:3, name:"CASUALS", imgSrc:Tnshirt, color:"rgb(63, 98, 131)"}];
    return(
        <div className='categorie'>
            {
                categorie.map((Info)=>{
                    return <Categories info={Info} key={Info.id}/>
                })
            }

        </div>
    )
}
export default Categorie