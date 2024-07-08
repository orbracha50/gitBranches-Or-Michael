import { contactService } from "../services/contact.service.js"
import { ContactPreview } from "./ContactPreview.jsx"

export function ContactList({contacts}){

    console.log(contacts)

    return <section className="list" >
        {contacts&& contacts.map(contact => <ContactPreview key={contact._id} contact={contact}/> )}
    </section>
}