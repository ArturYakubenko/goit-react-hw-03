
const SearchBox = (({ setFilter }) => {


    return ( 
            <form className="find">
                <label>find by name</label>
                <input onChange={(event) => setFilter(event.target.value)} type="text" placeholder=" input" />
          </form>
    )

})

export default SearchBox