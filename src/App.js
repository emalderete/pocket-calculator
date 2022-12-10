import Title from './Components/Title';
import Calc from './Components/Calc';
import Desc from './Components/Desc';
import './App.css';
import './Responsive.css';

function App() {
return (
  <div className='App'>
    <Title></Title>
    <div className='mainContent'>
      <Calc></Calc>
      <Desc></Desc>
    </div>
  </div>
);
}

export default App;
