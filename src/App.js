import logo from './logo.svg';
import './App.css';
import Button from './lib/components/Button';
import Card from './lib/components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This the design systme<code>src/App.js</code> and save to reload.
        </p>
        <Button label={'Make a Reservation'} variant={'secondary'}></Button>
        <Card
          image="/img/food8.jpg"
          title={'Mondays'}
          body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Learn More"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
