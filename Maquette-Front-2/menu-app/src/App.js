import star from './img/star.svg';


function App() {
  return (
    <div className="main">

      <header className="app-header">

        <h1>Découvrez notre <span className="underline">menu.</span></h1>

        <ul className='navbar'>
          <li className="button select"><p>Tout</p></li>
          <li className="button"><p>Viandes</p></li>
          <li className="button"><p>Légumes</p></li>
        </ul>

      </header>

      <section className="card-ctr">

        <div className="card">

          <div className="top">
            <img className="meal-img" src="" alt="meal" />
            <div className="rate">
              <img src={star} alt="star"/>
              <p>5 <span> (87) </span></p>
            </div>
          </div>

          <div className="bottom">
            <h3>Mélange de légume</h3>
            <p>Salade de tomates et carottes</p>
            <h3>5.99€</h3>
          </div>
        </div>

        <div className="card">

          <div className="top">
            <img src="" alt="meal" />
            <div className="rate">
              <img src={star} alt="star"/>
              <p>5 <span> (87) </span></p>
            </div>
          </div>

          <div className="bottom">
            <h3>Mélange de légume</h3>
            <p>Salade de tomates et carottes</p>
            <h3>5.99€</h3>
          </div>

        </div>

        <div className="card">

          <div className="top">
            <img src="" alt="meal" />
            <div className="rate">
              <img src={star} alt="star"/>
              <p>5 <span> (87) </span></p>
            </div>
          </div>

          <div className="bottom">
            <h3>Mélange de légume</h3>
            <p>Salade de tomates et carottes</p>
            <h3>5.99€</h3>
          </div>
          
        </div>

        <div className="card">

          <div className="top">
            <img src="" alt="meal" />
            <div className="rate">
              <img src={star} alt="star"/>
              <p>5 <span> (87) </span></p>
            </div>
          </div>

          <div className="bottom">
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
