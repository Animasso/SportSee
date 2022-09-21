import "./App.css";
import userFetch from "./hooks/userFetch";

function App() {
  const usersApp = userFetch();

  return <div className="App">{console.log("usersApp:", usersApp)}</div>;
}

export default App;
