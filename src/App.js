import { Classroom, Error, Verifyaccount, 
  Dashboard, StudentDashboard, Payment,
   Login, Signup, } from "./Pages"

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Login />

      <Dashboard />
      <StudentDashboard />
      <Payment />
      <Verifyaccount />
      <Signup />
      <Error />
      <Classroom />
      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
