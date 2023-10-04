import './App.scss';
import TopNav from './components/TopNav/TopNav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <div className="app__overlay">
        <TopNav />
        {/* <a href="#test">Will this scroll?</a> //yes */}
        <div className="app__content">
          <div className="app__text">
            <Hero />
            <Projects />
            <section>
              <h1>My Values</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum illo cupiditate maxime, explicabo at quam blanditiis voluptatem minima eum a, suscipit magnam officia. Eaque, soluta, esse maiores eum veniam illum et omnis delectus ratione dolore quae. Est debitis ad facere eum accusamus illum harum labore. Earum, minus dolorem. Illo consectetur optio reiciendis maxime quibusdam, beatae at recusandae quam molestiae itaque voluptatibus similique. Consectetur neque eligendi repudiandae similique esse quo natus numquam doloribus voluptatibus libero. Officia commodi quam laborum, consequuntur culpa dicta soluta, nam officiis autem ex sed. Corporis sint totam est tempore saepe deleniti praesentium sapiente porro nesciunt commodi?</p>
            </section>

            <section>
              <h1>My Story</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias eos, provident aliquam debitis ea sint ut? Dolore odit eligendi voluptatibus corrupti voluptate cum sit optio eveniet sunt dolores, nostrum aperiam veniam mollitia quia delectus accusamus inventore nihil quisquam omnis beatae ex. Sit numquam sapiente sint perferendis, soluta officia eveniet.</p>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias eos, provident aliquam debitis ea sint ut? Dolore odit eligendi voluptatibus corrupti voluptate cum sit optio eveniet sunt dolores, nostrum aperiam veniam mollitia quia delectus accusamus inventore nihil quisquam omnis beatae ex. Sit numquam sapiente sint perferendis, soluta officia eveniet.</p>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias eos, provident aliquam debitis ea sint ut? Dolore odit eligendi voluptatibus corrupti voluptate cum sit optio eveniet sunt dolores, nostrum aperiam veniam mollitia quia delectus accusamus inventore nihil quisquam omnis beatae ex. Sit numquam sapiente sint perferendis, soluta officia eveniet.</p>
            </section>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
