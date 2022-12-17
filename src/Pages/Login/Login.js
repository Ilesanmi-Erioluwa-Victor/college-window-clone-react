import { showToast } from "../../Utils/Toasts"


const Login = () => {
    return (
      <>
        <h1>Hello from Login</h1>
        {showToast("SUCCESS", "WAW...ffg.")}
      </>
    );
}

export default Login