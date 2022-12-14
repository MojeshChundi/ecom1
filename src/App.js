import Navbars from "./components/nav/Navbars";
import Cards from "./components/cards/Cards";
import Items from "./components/items/Items";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Cards />
      <Items />
      <Cards />
    </div>
  );
}

export default App;
