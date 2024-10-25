import './App.css'
import './components/ContactForm'
import ContactForm from './components/ContactForm'
import { useState } from 'react'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'


function App() {

  const [formData, getFormData] = useState(null)
  const [array, setArray] = useState([])
  const [id, getId] = useState(1)
  const [filter, setFilter] = useState("")

 const filterUsers = array.filter((user) =>
    user.Name.toLowerCase().includes(filter.toLowerCase().trim())
  );
 

  const onAddContacts = (newContact) => {
    const addContact = {
      id: `id-${id}`,
      Name: newContact.Name,
      Number: newContact.Number
    }
    getFormData(addContact)
    getId(prevId => prevId + 1)
  }

  return (
    <>
      <div className='wrap-div'>
        <h1>Phonebook</h1>
        <ContactForm onAddContacts={onAddContacts} />
        <SearchBox  setFilter={setFilter}/>
        <ContactList formData={formData} setArray={setArray} array={array} filterUsers={filterUsers} />
      </div>
    </>
  )
}

export default App
//=====