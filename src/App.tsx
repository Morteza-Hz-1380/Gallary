
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Gallary from "./components/Gallary";
import Animal from "./components/Animal";
import Nature from "./components/Nature";
import People from "./components/People";
import Car from "./components/Car";
import Travel from "./components/Travel";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (<>
<Header />

    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/animal">Animal</Link>
            </li>
            <li>
              <Link to="/nature">Nature</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/car">Car</Link>
            </li>
            <li>
              <Link to="/travel">Travel</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/gallery" Component={Gallary} />
          <Route path="/animal" Component={Animal} />
          <Route path="/nature" Component={Nature} />
          <Route path="/people" Component={People} />
          <Route path="/car" Component={Car} />
          <Route path="/travel" Component={Travel} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
