
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [theme , setTheme] = useState('light');
  const [count,setCount]= useState(0);
  return (
    <div className="App">
      <h3>Count:{count}</h3>
      <h3>current theme is :{theme}</h3>
      <Button 
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light" ); 
      }
      }
        >
          Click Me
          </Button>
          <button onClick={()=>setCount(count+5)}>Add</button>
            <button onClick={() => setCount(count-5)}>Reduce</button>
    </div>
  );
}

export default App;
