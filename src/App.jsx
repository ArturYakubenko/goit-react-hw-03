import './App.css'
import './components/ContactForm'
import ContactForm from './components/ContactForm'
import { useState } from 'react'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import { useEffect } from "react"
import { nanoid } from 'nanoid' // Імпортуємо nanoid для генерації унікальних ID


function App() {

  const [array, setArray] = useState([])
  const [filter, setFilter] = useState("")

    useEffect(() => {
        const localStor = localStorage.getItem("local")
        if (localStor && array.length == 0) {
            setArray(JSON.parse(localStor))    
            }   
    }, [])
  

  
 const filterUsers = array.filter((user) =>
    user.Name.toLowerCase().includes(filter.toLowerCase().trim())
  );
 
  const onAddContacts = (newContact) => {
    
    const addContact = {
      id: nanoid(),
      Name: newContact.Name,
      Number: newContact.Number
    }
    setArray((prev) => [...prev, addContact])
  }

  useEffect(() => { 
        if (array.length > 0) {
            localStorage.setItem("local", JSON.stringify(array))
        }
    }, [array])

  

  const handelDelete = (id) => { console.log(id)
    const newArray = array.filter(item => item.id !== id)
    setArray(newArray)
    localStorage.setItem("local", JSON.stringify(newArray))
  }


  return (
    <>
      <div className='wrap-div'>
        <h1>Phonebook</h1>
        <ContactForm onAddContacts={onAddContacts} />
        <SearchBox  setFilter={setFilter}/>
        <ContactList setArray={setArray} handelDelete={handelDelete} filterUsers={filterUsers} />
      </div>
    </>
  )
}

export default App
//=====