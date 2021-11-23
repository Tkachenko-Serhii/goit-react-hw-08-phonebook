import React from "react";
import PropTypes from "prop-types";
import { useFetchContactsQuery } from "redux/contactSlice";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import Loader from "components/Loader";

export default function ContactList() {
  let filteredContacts;
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector((state) => state.contacts.filter.toLowerCase());

  if (data) {
    filteredContacts = data.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  return (
    <>
      {isFetching && <Loader />}
      {filteredContacts && (
        <ul>
          {filteredContacts.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
