import "./App.css";
// import FakeLogin from "./Pages/FakeLogin";
// import dataUser from "./mock_data/user_data.json";
import useFetchUrl from "./hooks/useFetch";
// import UserFetchApi from "./hooks/UserFetchApi";
function App() {
  const dataUsers = useFetchUrl("/mock_data/user_data.json");
  console.log("dataUsers:", dataUsers);
  return (
    <div className="App">
      {/* <FakeLogin user12={user12} user18={user18} /> */}
    </div>
  );
}
export default App;
