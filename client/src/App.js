import logo from './logo.svg';
import './App.css';
import Search from "./components/memoSearch"
import List from "./components/memoList"
import image from "./images/MainPage.jpg";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
function App() {
  return (
    <div className="App"  style={{backgroundImage: 'url('+image+')'}}>
      <Router>         
    <div className="App" >
        <Route exact={true} path="/list" component={List} /> 
        <Route exact={true} path="/" component={Search} />
    </div>
    </Router>
    </div>
  );
}

export default App;
