import React from "react";
import s from "./Home.module.css";
import phonebook from "../images/phonebook.png";

const Home = () => (
  <div className={s.container}>
    <h1 className={s.title}>Welcome to phonebook</h1>
    <img src={phonebook} alt='phonebook' className={s.image}></img>
  </div>
);

export default Home;
