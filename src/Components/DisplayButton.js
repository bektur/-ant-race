
const DisplayButton = ({setStart, start, setAnts, data, calculateLikelihood}) => {
    
    const handleWinningLikelihood = () => {
        // intially set ants data for load then calculate likelihood 
        setAnts(data.ants);
        calculateLikelihood();        
    }
    
    return (
        <div className="button">
            <button onClick={() => setAnts(data.ants)}>Load</button>
            <button onClick={() => handleWinningLikelihood()}>Start</button>
        </div>
    )
}

export default DisplayButton;