
import { utilService } from './util.service.js'

export const contactService = {
    query,
    getById,
    remove,
    save
}

const contacts = _createContacts()

function query() {
    return Promise.resolve(contacts)
}

function getById(contactId) {
    const contact = contacts.find(contact => contact._id === contactId)
    // pdfService.buildAnimalsPDF(contacts) //pdf bonus
    if (!contact) return Promise.reject('Contact not found!')
    return Promise.resolve(contact)
}

function remove(contactId) {
    // contacts = contacts.filter(contact => contact._id !== contactId)

    const idx = contacts.findIndex(contact => contact._id === contactId)
    contacts.splice(idx, 1)
}

function save(contact) {
    if (contact._id) {
        const idx = contacts.findIndex(currBug => currBug._id === contact._id)
        contacts[idx] = { ...contacts[idx], ...contact }
    } else {
        contact._id = utilService.makeId()
        contact.createdAt = Date.now()
        contacts.unshift(contact)
    }
}
function _createContacts(){
   const contacts = [
        {
            fullName: "or bracha",
            address: "yehud",
            tel: "1719915173",
            _id: "a101"
        },
        {
            fullName: "michael spiridonov",
            address: "lebnon",
            tel: "17915384173",
            _id: "a102"
        },
        {
            fullName: "avi choen",
            address: "kiryat ata",
            tel: "17115384173",
            _id: "a103"
        }
    ]
    return contacts
}
