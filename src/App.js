import "./App.css";
import SideBar from "./components/SideBar";
import SigninComp from "./components/SigninComp";
import SignupComp from "./components/SignupComp";
import MainDashboard from "./components/UsersDashboard/MainDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="px-1 font-Poppins flex">
      <Router>
        {/* <SigninPage /> */}
        {/* <SideBar />
      <MainDashboard /> */}

        <Routes>
          <Route path="/signup" element={<SignupComp />} />
          <Route path="/" element={<SigninComp />} />
          <Route path="/mainDashboard" element={<MainDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
