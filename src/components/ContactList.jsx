import { useEffect } from "react"
import Contact from './Contact'



const ContactList = ({ formData, setArray, filterUsers, handelDelete }) => {
    

    useEffect(() => {
        if (formData) {
            setArray(pret => [...pret, formData, ])  
            }
    }, [formData])
    

    return (
        <ul>
            {filterUsers && filterUsers.map((item) => ( 
    <Contact key={item.id} item={item} handelDelete={handelDelete} />
))}
        </ul>
    )
   
    
}
export default ContactList