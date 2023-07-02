import { useContext, useState } from "react";
import UserContext from "../../components/User/UserContext";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const login = () => {
    if (!userName || !password) {
      return;
    }
    userLogin({ userName, password })
      .then(() => {
        navigate("/store");
      })
      .catch((error) => {
        if (error.message === "unknown user") {
          navigate("/register");
        }
      });
  };

  return (
    <div className={styles.loginWrapper}>
      <input
        placeholder="User name"
        onBlur={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onBlur={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export default Login;
