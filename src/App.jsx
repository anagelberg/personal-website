import './App.scss';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <div className="app">
      <div className="app__overlay">
        <TopNav />
        <div className="app__text-test">
          <h1>This is the start of something wonderful.</h1>
          <p>Please stay tuned as I build out my personal website.</p>

        </div>

      </div>
    </div>
  );
}

export default App;
