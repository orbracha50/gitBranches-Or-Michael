import { ContactFilter } from "../cmps/ContactFilter.jsx"
import { ContactList } from "../cmps/contactList.jsx"
import { loadContacts, setFilterBy } from "../store/actions/contact.actions.js"
const { useSelector, useDispatch } = ReactRedux
const { useNavigate, useParams,Link } = ReactRouterDOM
const { useEffect, useState } = React
export function ContactIndex() {
    const contacts = useSelector(storeState => storeState.contactModule.contacts)
    const isLoading = useSelector(storeState => storeState.contactModule.isLoading)
    const filterBy = useSelector(storeState => storeState.contactModule.filterBy)

    useEffect(() => {
        loadContacts()
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot load contacts')
            })
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    return <section className="filter-container">
        <ContactFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <Link to={`/contact/edit`} className="add-contact-btn btn" >Add </Link>
        <section className="list-container">
            <ContactList contacts={contacts} />
        </section>
    </section>
}

