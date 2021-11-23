import { createAction } from "@reduxjs/toolkit";

import shortId from "shortid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    name,
    number,
    id: shortId(),
  },
}));

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

const actions = { addContact, deleteContact, changeFilter };

export default actions;
