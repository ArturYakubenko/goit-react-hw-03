import { useEffect } from "react"



const ContactList = ({ formData, array, setArray, filterUsers }) => {
    
    useEffect(() => {
        const localStor = localStorage.getItem("local")
        if (localStor && array.length == 0) {
            setArray(JSON.parse(localStor))    
            }   
    }, [])

    useEffect(() => {
        if (formData) {
            setArray(pret => [...pret, formData, ])  
            }
    }, [formData])
    
    useEffect(() => { 
        if (array.length > 0) {
            localStorage.setItem("local", JSON.stringify(array))
        }
    }, [array])

    const handelDelete = (id) => {
     const newArray =  array.filter(item => item.id !== id)
       setArray(newArray)
}
    
    return (
        <ul>
            {filterUsers.length > 0 ? filterUsers.map((item, id) => {
                return (
                    <li key={item.id}>
                        <div className="li-wrap">
                            <span>Name: {item.Name}</span>
                            <span>Phone: {item.Number}</span>
                         </div>
                        <button onClick={() => handelDelete(item.id)} type="button" className="del-btn">Delete</button>
                    </li>
                )
            }): null}
        </ul>
    )
   
    
}
export default ContactList