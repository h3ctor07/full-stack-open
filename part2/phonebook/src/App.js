import { useState, useEffect } from "react"
import axios from "axios"
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

  const hook = () =>{
    console.log('effect')
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log('response fulfilled');
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render ', persons.length, ' contacts');

  // event handlers
  const handleNewPerson = (key) => (event) =>{
    setNewPerson({...newPerson, [`${key}`] : event.target.value})
  }

  const handleFilter = (event) => setFilter(event.target.value) 

  const addPerson = (event) =>{
    event.preventDefault()
    if(persons.some(x => x.name.toUpperCase() === newPerson.name.toUpperCase())){
      alert(`${newPerson.name} is already in the phonebook`)
      return
    }
    
    setPersons(persons.concat(newPerson))
    setNewPerson({name:'', number:''})
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
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App