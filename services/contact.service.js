import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

export const contactService = {
    query,
    getById,
    remove,
    save,
    getEmptyContact,
    getDefaultFilter,
}

const STORAGE_KEY = 'contactDB'
_createContacts()

function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
            if (filterBy.fullName) {
                const regExp = new RegExp(filterBy.fullName, 'i')
                contacts = contacts.filter(contact => regExp.test(contact.fullName))
            }
            if (filterBy.address) {
                const regExp = new RegExp(filterBy.address, 'i')
                contacts = contacts.filter(contact => regExp.test(contact.address))
            }
            if (filterBy.sort) {
                if (filterBy.sort === 'fullName') {
                    contacts = contacts.sort((a, b) => a.fullName.localeCompare(b.fullName));
                } else if (filterBy.sort === 'address'){
                    contacts = contacts.sort((a, b) => a.address.localeCompare(b.address));
                }
            }
            return contacts
        })
}

function getById(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}
function remove(contactId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, contactId)
}
function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY, contact)
    } else {
        return storageService.post(STORAGE_KEY, contact)
    }
}

function getEmptyContact() {
    return {
        fullName: '',
        address: '',
        tel: '',
    }
}

function getDefaultFilter() {
    return { fullName: '', address: '', sort: '' }
}

function _createContacts() {
    const contacts = [{
            fullName: "Or Bracha",
            address: "Yehud",
            tel: "1719915173",
            _id: "a101"
        },
        {
            fullName: "Michael Spiridonov",
            address: "Ashkelon",
            tel: "17915384173",
            _id: "a102"
        },
        {
            fullName: "Avi Choen",
            address: "Kiryat Ata",
            tel: "17115384173",
            _id: "a103"
        }
    ]
    utilService.saveToStorage(STORAGE_KEY, contacts)
    return contacts
}