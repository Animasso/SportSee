import "./styles/styles.css";
import FakeLogin from "./Pages/FakeLogin";
import { Routes, Route } from "react-router-dom";
import useFetchUrl from "./hooks/useFetch";
import Home from "./Pages/Home";

function App() {
  //Fetch data of both users
  const dataUsers = useFetchUrl("user/user_data.json");

  return (
    <div>
      <Routes>
        <Route path="/" element={<FakeLogin dataUsers={dataUsers} />} />
        <Route />

        <Route path="/user/:id" element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
}
export default App;
