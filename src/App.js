import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Counter from "./components/learn_useState";
import Resource from "./components/learn_useEffect";
import Usememo from "./components/learn_useMemo";
import NameRef from "./components/learn_useRef";
import LearnContext from './components/learn_useContext';
import ThemeProvider from './context/ThemeContext';
import CounterReducer from './components/learn_useReducer';
import ReducerComplex from './components/use_Reducer_complex';
import LearnuseCallback from './components/learn_useCallback';
import useFetch from './components/useFetch';
function App() {
  const {data, loading, error} = useFetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
  console.log(data)
  return (
    <Router>
      <div className="App">
        <Link to="/useState"><button className="button">useState</button></Link>
        <Link to="/useEffect"><button className="button">useEffect</button></Link>
        <Link to="/useMemo"><button className="button">UseMemo</button></Link>
        <Link to="/useRef"><button className="button">useRef</button></Link>
        <Link to="/useContext"><button className="button">useContext</button></Link>
        <Link to="/useReducer"><button className="button">useReducer</button></Link>
        <Link to="/useReducerComplex"><button className="button">useReducer Complex</button></Link>
        <Link to="/useCallback"><button className="button">useCallback</button></Link>
        <Link to="/useFetch"><button className="button">useFetch Custom</button></Link>



        <Switch>
          <Route exact path="/useState"><Counter /></Route>
          <Route exact path="/useEffect"><Resource /></Route>
          <Route exact path="/useMemo"><Usememo /></Route>
          <Route exact path="/useRef"><NameRef /></Route>
          <Route exact path="/useContext"><ThemeProvider><LearnContext /></ThemeProvider></Route>
          <Route exact path="/useReducer"><CounterReducer/></Route>
          <Route exact path="/useReducerComplex"><ReducerComplex/></Route>
          <Route exact path="/useCallback"><LearnuseCallback/></Route>
          <Route exact path="/useFetch">
            {
            loading ? 'Loading...' : 
            <pre>{JSON.stringify(data)}</pre>
            }
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
