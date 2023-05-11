const Filter = ({ handler, value}) => (
    <div>
        filter shown with: 
        <input onChange={handler} 
        value={value}
        name="searchField" />
    </div>
)

export default Filter;