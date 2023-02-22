import '../css/App.css';
import data from "../data/data";
import Animallist from './Animallist';

console.log(data);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.alt} style={{width:data.image_width, height:data.image_height}} />
        {data.subheading ? <h2>{data.subheading}</h2> : null} 
      </header>
      <Animallist animals = {data.animals} />
    </div>
  );
}
export default App;
