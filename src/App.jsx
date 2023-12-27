import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
