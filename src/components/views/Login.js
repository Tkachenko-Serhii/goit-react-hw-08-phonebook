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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Authorization page</h1>
      <form onSubmit={handleSubmit} className={s.form} autoComplete='off'>
        <label className={s.label}>
          E-mail
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    </>
  );
}
