import './GithubIcon.scss';
import { ReactComponent as Github } from '../../assets/icons/github.svg';

function GithubIcon() {
    return (
        <a
            href="https://github.com/anagelberg"
            target="_blank"
            rel="noopener noreferrer">
            <Github className='github-icon' />
        </a>
    );
}

export default GithubIcon;