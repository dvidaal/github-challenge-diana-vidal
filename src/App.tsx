import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import UserSearchbar from "./components/UserSearchbar/UserSearchbar";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="container">
          <UserSearchbar />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
