import "./App.css";
import SideBar from "./components/SideBar";
import MainDashboard from "./components/UsersDashboard/MainDashboard";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="px-1 font-Poppins flex">
      <SideBar />
      <MainDashboard />
      <Router>
        <Routes>
          <Route path="/signup" element={<SigninPage />} />
          <Route path="/signin" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
