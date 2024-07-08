import { ContactList } from "../cmps/ContactList.jsx"
import { loadContacts } from "../store/actions/contact.actions.js"
const { useSelector, useDispatch } = ReactRedux
const { useEffect, useState } = React
export function ContactIndex() {
    const contacts = useSelector(storeState => storeState.contactModule.contacts)
    const isLoading = useSelector(storeState => storeState.contactModule.isLoading)
    
    useEffect(() => {
        loadContacts()
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot load contacts')
            })
    }, [])
    return <section className="list-container">
        <ContactList contacts={contacts}/>
    </section>
}