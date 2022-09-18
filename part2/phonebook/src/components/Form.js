const Form = (props) =>{
    return (
    <form onSubmit={props.onSubmit}>
        {Object.keys(props.newPerson).map(key => (
            <div key={key}>
                {key}: <input 
                    value={props.newPerson[key]}
                    onChange={props.onChange(`${key}`)}/>
            </div>
        ))}
        <button type="submit">Add</button>
      </form>
)}

export default Form