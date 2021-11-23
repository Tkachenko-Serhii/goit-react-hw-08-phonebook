import Form from "components/Form";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

export default function App() {
  return (
    <div className='container'>
      <div className='addForm'>
        <h1 className='title'>Phonebook</h1>
        <Form />
      </div>
      <h2 className='title'>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
