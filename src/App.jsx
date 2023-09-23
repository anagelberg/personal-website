import './App.scss';
import { ReactComponent as LinkedInIcon } from './assets/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from './assets/icons/github.svg';

function App() {
  return (
    <div className="app">
      <div className="app__overlay">
        <h1>This is the start of something wonderful.</h1>
        <div className='contact-container'>
          <a href="https://github.com/anagelberg">
            <GithubIcon class='icon' />
          </a>
          <a href="https://www.linkedin.com/in/amy-nagelberg/">
            <LinkedInIcon class='icon' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
