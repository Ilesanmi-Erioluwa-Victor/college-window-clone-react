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
        <Route element={<Login />} path="login" exact />

        <Route element={<Dashboard />} path="dashboard" exact />

        <Route element={<StudentDashboard />} path="studentDashboard" exact />

        <Route element={<Payment />} path="payment" exact />

        <Route element={<Verifyaccount />} path="verifyAccount" exact />

        <Route element={<Signup />} path="signup/login" exact />

        <Route element={<Error />} path="*" exact />

        <Route element={<Classroom />} path="classroom" exact />

        {/* <ToastContainer /> */}
      </Routes>
    </>
  );
}

export default App;
