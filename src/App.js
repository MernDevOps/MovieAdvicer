import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Context from "./Components/Context";
import Discovery from "./Components/Discovery";

function App() {
  return (
    <div className="App">
      <div class="container" >
        <div class="row">
          <div class="col">
            <Navbar />
          </div>
          <div class="col-6">
            {" "}
            <Context />
          </div>
          <div class="col">
            <Discovery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
