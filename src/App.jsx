import './App.scss';
import TopNav from './components/TopNav/TopNav';
import Hero from './components/Hero/Hero';
import Sections from './components/Sections/Sections';
import DecorativeImage from './components/DecorativeImage/DecorativeImage';


function App() {
  return (
    <main className="app">
      <TopNav />

      <section className="app__text">
        <Hero />
        <Sections />
      </section>

      <DecorativeImage />

    </main>
  );
}

export default App;
