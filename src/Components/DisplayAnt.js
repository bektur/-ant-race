
const DisplayAnt = ({ ants, load }) => {      
    const Ant = ({ ant }) => {
        return (
            <div>
                <div>Name: {ant.name}</div>
                <div>Length: {ant.length}</div>
                <div>Color: {ant.color}</div>
                <div>Weight: {ant.weight}</div>
                <div>Likelihood: {ant.likelihood}</div>
            </div>
        )
    }
    return (
        <div className="ant" style={{display: ants.length > 0 ? 'flex' : 'none'}} >
            {ants.length > 0 && ants.map((ant, index) => {
                return <Ant ant={ant} key={index}/>
            })}
        </div>
    );
}

export default DisplayAnt;