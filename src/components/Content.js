import './Content.css'
import pic1 from '../pictures/pic1.jpg'
import pic2 from '../pictures/pic2.jpg'
import pic3 from '../pictures/pic3.jpg'
import pic4 from '../pictures/pic4.jpg'
import pic5 from '../pictures/pic5.jpg'
import pic6 from '../pictures/pic6.jpg'
import pic7 from '../pictures/pic7.jpg'

function Conent () {
    return (
        <div className="Content">
            <img src={pic2} alt="pic2" />
            <img src={pic3} alt="pic3" />
            <img src={pic4} alt="pic4" />
            <img src={pic5} alt="pic5" />
            <img src={pic6} alt="pic6" />
            <img src={pic7} alt="pic7" />
            <img src={pic1} alt="pic1" />
        </div>
    );
}

export default Conent;