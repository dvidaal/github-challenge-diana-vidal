import "./App.css";
import Header from "./components/Header/Header";
import UserSearchbar from "./components/UserSearchbar/UserSearchbar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <UserSearchbar />
      </div>
    </>
  );
}

export default App;
