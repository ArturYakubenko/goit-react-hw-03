import { useEffect } from "react"
import Contact from './Contact'



const ContactList = ({filterUsers, handelDelete }) => {
    
    return (
        <ul>
            {filterUsers && filterUsers.map((item) => ( 
    <Contact key={item.id} item={item} handelDelete={handelDelete} />
))}
        </ul>
    )
   
    
}
export default ContactList