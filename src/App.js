import "./App.css";
import Navigation from "./components/Nabvar/navbar";
import CardList from "./components/YourTeams/CardList/CardList";
import MyCardList from "./components/TeamsForMe/MyCardList/MyCardList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="testDesign">
        <div className="custom-shape-top"></div>
        <div className="custom-shape-divider-top-1624995119">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <CardList />
        <MyCardList />
      </div>
    </div>
  );
}

export default App;
