import { contactService } from "../services/contact.service.js"
import { ContactPreview } from "./ContactPreview.jsx"

export function ContactList({contacts}){

    console.log(contacts)

    return <section>
        {contacts&& contacts.map(contact => <ContactPreview contact={contact}/> )}
    </section>
}