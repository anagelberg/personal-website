import './TopNav.scss';
import GithubIcon from '../GithubIcon/GithubIcon';
import LinkedInIcon from '../LinkedInIcon/LinkedInIcon';

function TopNav() {
    return (
        <nav className='nav'>
            <div className='nav__contact'>
                <GithubIcon link="https://github.com/anagelberg" />
                <LinkedInIcon link="https://www.linkedin.com/in/amy-nagelberg/" />
            </div>
        </nav>
    )
};

export default TopNav;