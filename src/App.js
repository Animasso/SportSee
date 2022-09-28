import "./styles/styles.css";
import FakeLogin from "./Pages/FakeLogin";
// import NavBarFakelogin from "./components/NavBarFakelogin";
import { Routes, Route } from "react-router-dom";
import useFetchUrl from "./hooks/useFetch";
import Home from "./Pages/Home";

//import le fetch ici avec le data user et le faire passer en tant que props dans les elelment
function App() {
  const dataUsers = useFetchUrl("mock_data/user_data.json");
  console.log("dataUsers:", dataUsers);
  return (
    <div>
      <Routes>
        <Route path="/" element={<FakeLogin dataUsers={dataUsers} />} />
        <Route />

        <Route path="/user/:id" element={<Home dataUsers={dataUsers} />} />
        <Route />
      </Routes>
    </div>
  );
}
export default App;
