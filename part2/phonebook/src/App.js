import { useState, useEffect } from "react"
import services from "./services/phonebook"

import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"

const Notification = ({message}) => {
  const messageStyle = {
  color: "green",
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
}
  
  if (message === '') {
    return null
  }

  return (
    <div style={messageStyle}>
      {message}
    </div>
  )
}

const App = () => {
  // states for persons objects, new person from form, and filter
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({
    name: '', number: ''
  })
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')  
  useEffect(() => {
    services
      .getAll()
      .then(contacts => {
        setPersons(contacts)
      })
  }, [])

  // event handlers
  const handleNewPerson = (key) => (event) =>{
    setNewPerson({...newPerson, [`${key}`] : event.target.value})
  }

  const handleFilter = (event) => setFilter(event.target.value) 

  const updatePerson = () => {
    if(window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with the new one?`)){
      const personToUpdate = persons.find(person => newPerson.name === person.name)
      const updatedContact = {...personToUpdate, number: newPerson.number}
      services
        .update(updatedContact)
        .then(response => {
          setPersons(persons.map(person => 
            person.name !== newPerson.name
              ? person
              : response
          ))
          setMessage(
            `Updated ${newPerson.name}`
          )
          setTimeout(() => {
            setMessage('')
          }, 5000)
          setNewPerson({name:'', number:''})
        })
    }
  }

  const addPerson = (event) =>{
    event.preventDefault()
    if(persons.some(x => x.name.toUpperCase() === newPerson.name.toUpperCase())){
      updatePerson()
      return
    }

    

    services
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(
          `Added ${newPerson.name}`
        )
        setTimeout(() => {
          setMessage('')
        }, 5000)
        setNewPerson({name:'', number:''})
      })

      
  }

  const deletionOf = (id) => {
    const name = persons.find(person => person.id === id).name
    if(window.confirm(`Are you sure you want to delete ${name}?`)){
      services
        .remove(id)
      setPersons(persons.filter(person => (
        person.id !== id
      )))
    }
    
  }

  //logic for filtering phonebook
  const filteredPersons = filter 
    ? persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()) )
    : persons

  return(
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter value={filter} onChange={handleFilter} />
      <h2>Add a new</h2>
      <Form onSubmit={addPerson} onChange={handleNewPerson} newPerson={newPerson} />
      <h2>Numbers</h2>
      <Persons 
        persons={filteredPersons}
        deletionOf = {deletionOf}/>
    </div>
  )
}

export default App