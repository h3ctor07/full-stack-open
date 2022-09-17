import { useState } from "react"

const Person = ({person}) => <p>{person.name} {person.number}</p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newPerson, setNewPerson] = useState({
    name: '', number: ''
  })
  const [filter, setFilter] = useState('')

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

  const filteredPersons = filter 
    ? persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()) )
    : persons

  return(
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input value={filter} onChange={handleFilter}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newPerson.name}
            onChange={handleNewPerson('name')}/>
        </div>
        <div>
          phone: <input
            value={newPerson.number}
            onChange={handleNewPerson('number')} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person =>
        <Person key={person.name} person={person}/>  
      )}
    </div>
  )
}

export default App