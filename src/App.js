import { Classroom, Error, Verifyaccount, 
  Dashboard, StudentDashboard, Payment,
   Login, Signup, } from "./Pages"

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
   </>
  );
}

export default App;
