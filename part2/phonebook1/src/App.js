import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";

function App() {
  //states
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [inputs, setInputs] = useState({})

  //change handlers
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => ({...values, [name]: value}));
  }

  //submit
  const addPerson = (event) => {
    event.preventDefault();
    const newName = inputs.nameField;
    const newNumber = inputs.numberField;


    const newNameObj = {
      name: newName,
      number: newNumber
    }

    if (persons.find(p => p.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(newNameObj));
    }

    setInputs(values => ({...values, nameField: '', numberField: ''}))
  }

  //filteredresults
  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(inputs.searchField.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handler={handleChange} value={inputs.searchField} />
      <h2>Add a new</h2>
      <Form addPerson={addPerson}
      nameHandler={handleChange}
      numberHandler={handleChange}
      inputs={inputs} />
      <h2>Numbers:</h2>
      <ul>
        {filteredPersons.map((p, i) => <li key={i}>{p.name}: {p.number}</li>)}
      </ul>
    </div>
  )
}

export default App;
