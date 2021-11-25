import PropTypes from "prop-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "redux/contacts/contactsActions";
import s from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const stateFilter = useSelector((state) => state.contacts.filter);
  const onChangeFilter = (e) =>
    dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <div className={s.container}>
      <p className={s.text}>Find contacts by name:</p>
      <input
        type='text'
        name='Find contact'
        onChange={onChangeFilter}
        value={stateFilter}
        className={s.input}
        autoComplete='off'
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
