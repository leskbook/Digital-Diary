import logo from './logo.svg';
import './App.css';
import Search from "./components/memoSearch"
import image from "./images/MainPage.jpg";
function App() {
  return (
    <div className="App"  style={{backgroundImage: 'url('+image+')'}}>
      <Search/>
    </div>
  );
}

export default App;
