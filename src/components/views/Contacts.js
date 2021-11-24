import { lazy } from "react";
import s from "./Contacts.module.css";

const Form = lazy(() => import("../Form" /* webpackChunkName: "form-page" */));

const Filter = lazy(() =>
  import("../Filter" /* webpackChunkName: "filter-page" */)
);

const ContactList = lazy(() =>
  import("../ContactList" /* webpackChunkName: "contacts-page" */)
);

export default function Contacts() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
