import star from './img/star.svg';


function App() {
  return (
    <div className="container">

      <header className="App-header">

        <h1>Découvrez notre <span className="underline">menu.</span></h1>

        <ul className='navBar'>
          <li className="button"><p>Tout</p></li>
          <li className="button"><p>Viandes</p></li>
          <li className="button"><p>Légumes</p></li>
        </ul>

      </header>

      <section className="card-ctr">

        <div className="card">

          <div className="top">
            <img src="" alt="meal" />
            <div className="rate">
              <img src={star} alt="star"/>
              <p>5 <span> (87) </span></p>
            </div>
          </div>

          <div classname="bottom">
            <h3>Mélange de légume</h3>
            <p>Salade de tomates et carottes</p>
            <h3>5.99€</h3>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
