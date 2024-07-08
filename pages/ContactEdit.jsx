const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { contactService } from "../services/contact.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { saveContact } from "../store/actions/contact.actions.js"

export function ContactEdit() {
    const [contactToEdit, setContactToEdit] = useState(contactService.getEmptyContact())
    const navigate = useNavigate()
    const { contactId } = useParams()

    useEffect(() => {
        if (!contactId) return
        loadContact()
    }, [])

    function loadContact() {
        contactService.getById(contactId)
            .then((contact) => setContactToEdit(contact))
            .catch((err) => {
                console.log('Had issues in contact details', err)
                navigate('/contact')
            })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setContactToEdit((prevContact) => ({ ...prevContact, [field]: value }))
    }

    function onSaveContact(ev) {
        ev.preventDefault()
        saveContact(contactToEdit)
            .then((contact) => {
                console.log('contact saved', contact);
                showSuccessMsg('Contact saved!')
                navigate('/contact')
            })
            .catch(err => {
                console.log('err', err)
                showErrorMsg('Cannot save contact')
            })
    }
    return <section className="contact-edit">
        <h2>{contactToEdit._id ? 'Edit this contact' : 'Add a new contact'}</h2>

        <form onSubmit={onSaveContact}>
            <label htmlFor="fullName">Full Name : </label>
            <input type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter Full name..."
                value={contactToEdit.fullName}
                onChange={handleChange}
            />
            <label htmlFor="address">Address : </label>
            <input type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
                value={contactToEdit.address}
                onChange={handleChange}
            />
            <label htmlFor="tel">Phone Number : </label>
            <input type="text"
                name="tel"
                id="tel"
                placeholder="Enter Phone Number"
                value={contactToEdit.tel}
                onChange={handleChange}
            />

            <div>
                <button>{contactToEdit._id ? 'Save' : 'Add'}</button>
                <Link to="/contact">Cancel</Link>
            </div>
        </form>
    </section>
}