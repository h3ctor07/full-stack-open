import { useState } from "react"

const Person = ({person}) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '555-555-5555'},
  ])
  const [newPerson, setNewPerson] = useState({
    name: '', number: ''
  })


  const handleNewName = (event) => {
    setNewPerson({...newPerson, name: event.target.value})
  }

  const handleNewNumber = (event) => {
    setNewPerson({...newPerson, number: event.target.value})
  }
  
  const addPerson = (event) =>{
    event.preventDefault()
    if(persons.some(x => x.name === newPerson.name)){
      alert(`${newPerson.name} is already in the phonebook`)
      return
    }
    
    setPersons(persons.concat(newPerson))
    setNewPerson({name:'', number:''})
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newPerson.name}
            onChange={handleNewName}/>
        </div>
        <div>
          phone: <input
            value={newPerson.number}
            onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} person={person}/>  
      )}
    </div>
  )
}

export default App