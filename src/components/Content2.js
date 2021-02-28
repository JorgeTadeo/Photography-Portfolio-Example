import './Content.css'
import land1 from '../pictures/land1.jpg'
import land2 from '../pictures/land2.jpg'
import land3 from '../pictures/land3.jpg'
import land4 from '../pictures/land4.jpg'
import land5 from '../pictures/land5.jpg'
import land6 from '../pictures/land6.jpg'
import land7 from '../pictures/land7.jpg'

function Conent2 () {
    return (
        <div className="Content">
            <img src={land2} alt="pic2" />
            <img src={land3} alt="pic3" />
            <img src={land4} alt="pic4" />
            <img src={land5} alt="pic5" />
            <img src={land6} alt="pic6" />
            <img src={land7} alt="pic7" />
            <img src={land1} alt="pic1" />
        </div>
    );
}

export default Conent2;