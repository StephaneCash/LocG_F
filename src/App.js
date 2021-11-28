import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Routes from "./route/Routes";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
