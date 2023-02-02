import Menu from './Pages/Menu';


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

      <Menu/>
    </div>
  );
}

export default App;
