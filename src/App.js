import Introduction from './components/Introduction';
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import{BrowserRouter as Router,Route} from "react-router-dom"

import {useRef,useEffect,useState} from "react"
function App() {


  return (
    <Router>
      <Route path ="/" exact>
        <div className="App">
              <Introduction/>
              <h1 className="center project-header"  id="here">Project</h1>
              <Grid/>

        </div>
      </Route>
    </Router>
  );
}

export default App;
