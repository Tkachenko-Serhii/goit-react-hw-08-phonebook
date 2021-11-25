import { useDeleteContactMutation } from "redux/contacts/contactSlice";
import { alert } from "@pnotify/core";

import s from "./ContactItem.module.css";

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  isDeleting &&
    alert({
      type: "warning",
      text: `Contact ${name} was deleted!`,
    });

  return (
    <li className={s.item}>
      <div className={s.description}>
        <p className={s.contact}>
          <span className={s.contactText}>Name: </span>
          {name}
        </p>
        <p className={s.contact}>
          {" "}
          <span className={s.contactText}>Number: </span>
          {number}
        </p>
      </div>
      <button
        className={s.button}
        onClick={(e) => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
}
