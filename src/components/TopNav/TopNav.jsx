import './TopNav.scss';
import GithubIcon from '../GithubIcon/GithubIcon';
import LinkedInIcon from '../LinkedInIcon/LinkedInIcon';

function TopNav() {
    return (
        <nav className='nav'>
            <div className='nav__contact'>
                <GithubIcon />
                <LinkedInIcon />
            </div>
            <h1 className='nav__name'>Amy Nagelberg</h1>
        </nav>
    )
};

export default TopNav;