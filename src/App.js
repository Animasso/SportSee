import "./App.css";
import FakeLogin from "./Pages/FakeLogin";
import { Routes, Route } from "react-router-dom";
// import useFetchUrl from "./hooks/useFetch";
import Home from "./Pages/Home";

function App() {
  // const dataUsers = useFetchUrl("mock_data/user_data.json");

  return (
    <div>
      <Routes>
        <Route path="/" element={<FakeLogin />} />
        <Route />
        <Route path="/user/:id" element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
}
export default App;
