import './GithubIcon.scss';
import { ReactComponent as Github } from '../../assets/icons/github.svg';

function GithubIcon({ link, modifier, clickHandler }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            <Github
                className={`github-icon ${modifier && `github-icon${modifier}`}`}
                onClick={clickHandler && clickHandler} />
        </a >
    );
}

export default GithubIcon;