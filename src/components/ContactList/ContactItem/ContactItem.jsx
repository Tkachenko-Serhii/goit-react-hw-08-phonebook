import { useDeleteContactMutation } from "redux/contactSlice";
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
      <p className={s.contact}>
        {name}: {number}
      </p>
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
