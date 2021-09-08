import logo from './logo.svg';
import './App.css';
import Employee from './component/Employee';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateEmployee from './component/CreateEmployee';
import UpdateEmployee from './component/UpdateEmployee';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
            <Navbar/>
              <div className="container">
                <Switch>
                      <Route path="/" exact component={Employee}/>
                      <Route path="/employees" component={Employee}/>
                      <Route path="/add-employees" component={CreateEmployee}/>
                      <Route path="/update-employees/:id" component={UpdateEmployee}/>

                    <Employee/>
                </Switch>
              </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
