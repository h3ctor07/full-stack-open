import { useState, useEffect } from "react"
import services from "./services/phonebook"

import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"

const App = () => {
  // states for persons objects, new person from form, and filter
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({
    name: '', number: ''
  })
  const [filter, setFilter] = useState('')
  
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