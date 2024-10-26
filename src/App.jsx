import './App.css'
import './components/ContactForm'
import ContactForm from './components/ContactForm'
import { useState } from 'react'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import { useEffect } from "react"


function App() {

  const [formData, getFormData] = useState(null)
  const [array, setArray] = useState([])
  const [nextId, setNextId] = useState(1)
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
    setNextId(prevId => prevId + 1)
    let newId
      if (!array.includes(`id-${nextId}`)) {
        newId = nextId
      }
      else {
        setNextId(prevId => prevId + 1)
      }
    const addContact = {
      id: `id-${newId}`,
      Name: newContact.Name,
      Number: newContact.Number
    }
    getFormData(addContact)

  }

  useEffect(() => { 
        if (array.length > 0) {
            localStorage.setItem("local", JSON.stringify(array))
        }
    }, [array])

   
  console.log(array)

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
        <ContactList formData={formData} setArray={setArray} handelDelete={handelDelete} filterUsers={filterUsers} />
      </div>
    </>
  )
}

export default App
//=====