import { Classroom, Error, Verifyaccount, 
  Dashboard, StudentDashboard, Payment,
   Login, Signup, } from "./Pages"

   import { showToast } from "./Utils/Toasts";

function App() {
  return (
   <>
   <showToast type="SUCCESS" msg="Sorry welcome..."/>
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
