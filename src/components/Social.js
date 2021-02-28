import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Social.css'

function Social () {

    return(
        <div className="Social">
            <a href="https://www.facebook.com/"><FontAwesomeIcon className="facebook" icon={['fab', 'facebook-f']} size="lg" /></a>
            <a href="https://www.instagram.com/"><FontAwesomeIcon className="instagram" icon={['fab', 'instagram']} size="lg"/></a>
            <FontAwesomeIcon icon="envelope"  size="lg" />
        </div>
    );
}

export default Social;