import { Route, Routes, Navigate } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "styled-components";


import { useThemeToggle } from "./Hooks";
import { darkTheme, defaultTheme } from "./styled-components";
import NetWorkWrapper from "./components/NetworkWrapper/NetworkWrapper";

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
  const { useDarkTheme } = useThemeToggle();

  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <NetWorkWrapper>
          <ModalProvider>
            <Routes>
              <Route element={<Login />} path="login" exact />

              <Route element={<Dashboard />} path="dashboard" exact />

              <Route
                element={<StudentDashboard />}
                path="studentDashboard"
                exact
              />

              <Route element={<Payment />} path="payment" exact />

              <Route element={<Verifyaccount />} path="verifyAccount" exact />

              <Route element={<Signup />} path="signup/login" exact />

              <Route element={<Error />} path="*" exact />

              <Route element={<Classroom />} path="classroom" exact />

              {/* <ToastContainer /> */}
            </Routes>
          </ModalProvider>
        </NetWorkWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
