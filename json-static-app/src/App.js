import logo from './logo.svg';
import './App.css';

import Dados from "./dados.json";

function App() {
  return (
    <div className="App">
      <div className="posts">
        {Data.map(post => {
          return (
            <div key={ post.id }>
              <h3>{ post.title }</h3>
              <p>{ post.content }</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
