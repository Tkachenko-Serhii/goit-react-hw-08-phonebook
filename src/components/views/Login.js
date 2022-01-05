import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import s from "./Login.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert({
        type: "warning",
        text: "Please enter your email and password",
      });
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className={s.title}>Authorization page</h1>
      <form onSubmit={handleSubmit} className={s.form} autoComplete='off'>
        <label className={s.label}>
          <span className={s.text}>E-Mail</span>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            autoComplete='off'
          />
        </label>
        <label className={s.label}>
          <span className={s.text}>Password</span>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type='submit' className={s.button}>
          Login
        </button>
      </form>
    </>
  );
}
