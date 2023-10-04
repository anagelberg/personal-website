import './DeployIcon.scss';
import { ReactComponent as Deploy } from '../../assets/icons/link.svg';

function DeployIcon({ link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            <Deploy className='deploy-icon' />
        </a>
    );
}

export default DeployIcon;