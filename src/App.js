import { Route, Routes, Navigate } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import { useThemeToggle } from "Hooks";
import { darkTheme, defaultTheme } from "Styled-components";
import { NetWorkWrapper } from "components";
import Toastify from "Utils/Toasts";

import {
  Classroom,
  Error,
  Verifyaccount,
  Dashboard,
  StudentDashboard,
  Payment,
  Signup,
  Login
} from "Pages";


// import { ToastContainer } from "react-toastify";

function App() {
  const { useDarkTheme } = useThemeToggle();

  return (
    <main className="conatiner">
      <div className="overall-layout">
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <NetWorkWrapper>
          <ModalProvider>
            <Routes>
              <Route element={<Login />} path="/login" exact />

              <Route element={<Dashboard />} path="/dashboard" exact />

              <Route
                element={<StudentDashboard />}
                path="/studentDashboard"
                exact
              />

              <Route element={<Payment />} path="/payment" exact />

              <Route element={<Verifyaccount />} path="/verifyAccount" exact />

              <Route element={<Signup />} path="/signup" exact />

              <Route element={<Login />} path="/login" exact />

              <Route element={<Classroom />} path="/classroom" exact />

              <Route element={<Error />} path="*" exact />

            </Routes>
            <Toastify />
          </ModalProvider>
        </NetWorkWrapper>
      </ThemeProvider>
      </div>
    </main>
  );
}

export default App;
