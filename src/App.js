import "./styles/styles.css";
import FakeLogin from "./Pages/FakeLogin";
// import NavBarFakelogin from "./components/NavBarFakelogin";
import { Routes, Route } from "react-router-dom";
// import useFetchUrl from "./hooks/useFetch";
import Home from "./Pages/Home";

function App() {
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
