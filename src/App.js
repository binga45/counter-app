import './App.css';
import NavBar from "./components/navbar"; 
import Counters from './components/counters';

function App() {
  return (
    <div>
    <NavBar/>
    <main class="container">
      <Counters />
    </main>
    </div>
  );
}

export default App;
