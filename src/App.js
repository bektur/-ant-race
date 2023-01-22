import './App.css';
import data from '../src/data.json';
import DisplayAnt from './Components/DisplayAnt';
import { useEffect, useState } from 'react';
import DisplayButton from './Components/DisplayButton';

function App() {
  const [load, setLoad] = useState(false);
  const [start, setStart] = useState(false);
  const [ants, setAnts] = useState([]);  
  const [likelihoods, setLikelihood] = useState([]);

  const generateAntWinLikelihoodCalculator = () => {
    const delay = 1000 + Math.random() * 1000;
    const likelihoodOfAntWinning = Math.random();

    return (callback) => {
        setTimeout(() => {
            callback(likelihoodOfAntWinning);
        }, delay);
    };
  }
  
  const calculateLikelihood = () => {    
    const antData = data.ants;

    antData.forEach((data, index, arr) => {
      const callback = generateAntWinLikelihoodCalculator();
      callback((likelihood) => {      
        arr[index] = {...data, 'likelihood': Math.round(likelihood * 100) / 100};      
        // sort by likelihood
        arr.sort((a, b) => (a.likelihood > b.likelihood) ? -1 : (b.likelihood > a.likelihood ? 1 : 0));       
        setAnts([...arr]);
      });                     
    })     
  }

  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <DisplayButton setStart={setStart} start={start} setAnts={setAnts} data={data} calculateLikelihood={calculateLikelihood}/>
      {ants.length > 0 && <DisplayAnt ants={ants}/>}
    </div>
  );
}

export default App;
