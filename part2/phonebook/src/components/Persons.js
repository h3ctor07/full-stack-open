const Person = ({person, requestDeletion}) => (
    <p>
        {person.name} {person.number}
        <button onClick={requestDeletion}>delete</button>
    </p>
)
const Persons = ({persons, deletionOf}) =>{
    
    return(
        <div>
            {persons.map(person => 
            <Person 
                person={person} 
                key={person.name}
                requestDeletion={() => deletionOf(person.id)}
                />)}
        </div>
  
    )
}
export default Persons

