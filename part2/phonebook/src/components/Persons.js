const Person = ({person}) => <p>{person.name} {person.number}</p>

const Persons = ({persons}) =>{
    
    return(
        <div>
            {persons.map(person => <Person person={person} key={person.name}/>)}
        </div>
  
    )
}
export default Persons

