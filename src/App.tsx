import { Route, Routes, Navigate } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import { useThemeToggle } from "Hooks";
import { defaultTheme, darkTheme } from "Css-Styled";
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
  Login,
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
                <Route path="/classroom" element={<Classroom />} />
                {/* Auto Navigate to classroom route as homepage */}
                <Route
                  path="/"
                  element={<Navigate replace to={"/classroom"} />}
                />
                <Route element={<Login />} path="/login" />

                <Route element={<Dashboard />} path="/dashboard" />

                <Route
                  element={<StudentDashboard />}
                  path="/studentDashboard"
                />

                <Route element={<Payment />} path="/payment" />

                <Route element={<Verifyaccount />} path="/verifyAccount/:type/:email" />

                <Route element={<Signup />} path="/signup" />

                <Route element={<Login />} path="/login" />

                <Route element={<Error />} path="*" />
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
