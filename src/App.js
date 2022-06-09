import Counter from "./components/Counter";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h2>COUNTER</h2>
      <Counter counter={0} />
    </div>
  );
}

export default App;