import './LinkedInIcon.scss';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

function LinkedInIcon() {
    return (
        <a href="https://www.linkedin.com/in/amy-nagelberg/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedIn class='linkedin-icon' />
        </a>
    );
}

export default LinkedInIcon;