import { useState } from "react";
import styles from "./Register.module.css";
import { registerService } from "../../services";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    registerService({ firstName, lastName, email, phone, userName, password });
  };

  return (
    <div className={styles.registerWrapper}>
      <input
        placeholder="First name"
        onBlur={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last name"
        onBlur={(e) => setLastName(e.target.value)}
      />
      <input placeholder="Email" onBlur={(e) => setEmail(e.target.value)} />
      <input placeholder="Phone" onBlur={(e) => setPhone(e.target.value)} />
      <input
        placeholder="User name"
        onBlur={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Password"
        onBlur={(e) => setPassword(e.target.value)}
      />
      <button onClick={register()}>Register</button>
    </div>
  );
};

export default Register;
