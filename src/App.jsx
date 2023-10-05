import './App.scss';
import TopNav from './components/TopNav/TopNav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Values from './components/Values/Values';
import Story from './components/Story/Story';


function App() {
  return (
    <div className="app">
      <div className="app__overlay">
        <TopNav />
        <div className="app__content">

          <div className="app__text">
            <Hero />
            <Projects />

            <Values />
            <Story />
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
