import './App.css';
import Random2 from './components/Random.V2';
import Tag2 from './components/Tag.v2';

function App() {
  return (
    <div>
      <h1>random gif appplication</h1>
      <div className = "main-container">
        <Random2/>
        <Tag2/>
      </div>
        
    </div>
  );
}

export default App;
