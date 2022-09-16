import { useState } from "react"

const Person = ({person}) => <p>{person.name}</p>

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', id: 1},
  ])
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      {persons.map(person =>{

        return <Person key={person.id} person={person}/> 
      }
         
      )}
    </div>
  )
}

export default App