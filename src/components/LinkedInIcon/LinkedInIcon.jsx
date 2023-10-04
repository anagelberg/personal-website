import './LinkedInIcon.scss';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

function LinkedInIcon({ link }) {
    return (
        <a href={link}
            target="_blank"
            rel="noopener noreferrer">
            <LinkedIn className='linkedin-icon' />
        </a>
    );
}

export default LinkedInIcon;