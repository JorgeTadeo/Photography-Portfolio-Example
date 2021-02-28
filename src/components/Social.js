import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Social.css'

function Social () {

    return(
        <div className="Social">
            <FontAwesomeIcon className="facebook" icon={['fab', 'facebook-f']} size="lg" />
            <FontAwesomeIcon className="instagram" icon={['fab', 'instagram']} size="lg"/>
            <FontAwesomeIcon icon="envelope"  size="lg" />
        </div>
    );
}

export default Social;