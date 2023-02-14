import './App.css';
import Menu from '../components/Menu';

function App() {

  return (
    <div>
      <header>
        <div>Pho Viet</div>
        <div className='buttons'>
          <button>Sign In</button>
          <button>Basket</button>
        </div>
      </header>
      <main>
        <Menu />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
