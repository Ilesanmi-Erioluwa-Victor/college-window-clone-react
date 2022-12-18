import { Route, Routes } from "react-router-dom";
import {
  Classroom,
  Error,
  Verifyaccount,
  Dashboard,
  StudentDashboard,
  Payment,
  Login,
  Signup,
} from "./Pages";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="login" exact/>
        

        <Dashboard />
        <StudentDashboard />
        <Payment />
        <Verifyaccount />
        <Signup />
        <Error />
        <Classroom />
        {/* <ToastContainer /> */}
      </Routes>
    </>
  );
}

export default App;
