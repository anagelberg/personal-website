import './GithubIconLocked.scss';
import GithubIcon from '../GithubIcon/GithubIcon';
import { ReactComponent as Locked } from '../../assets/icons/lock.svg';


function GithubIconLocked({ link }) {
    return (
        <div className='github-locked'>
            {/* clean this modifier */}
            <GithubIcon link={link} modifier='--lighten github-icon--small' />
            <Locked className='github-locked__locked-icon' />
        </div>
    );
}

export default GithubIconLocked;