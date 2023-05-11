const Form = ({ addPerson, handler, inputs}) => {
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handler}
           value={inputs.nameField}
           name="nameField"/>
        </div>
        <div>
          number: <input onChange={handler} 
          value={inputs.numberField} 
          name="numberField"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form;