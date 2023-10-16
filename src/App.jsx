import './App.scss';
import TopNav from './components/TopNav/TopNav';
import Hero from './components/Hero/Hero';
import Sections from './components/Sections/Sections';


function App() {
  return (
    <main className="app">
      <TopNav />

      <section className="app__text">
        <Hero />
        <Sections />
      </section>


    </main>
  );
}

export default App;
