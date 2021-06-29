import "./App.css";
import Navigation from "./components/Nabvar/navbar";
import CardList from "./components/YourTeams/CardList/CardList";
import MyCardList from "./components/TeamsForMe/MyCardList/MyCardList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <CardList />
      <MyCardList />
    </div>
  );
}

export default App;
