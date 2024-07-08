import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

export const contactService = {
    query,
    getById,
    remove,
    save,
    getEmptyContact,
}

const STORAGE_KEY = 'contactDB'
_createContacts()

function query() {
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
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

function _createContacts() {
    const contacts = [{
            fullName: "Or Bracha",
            address: "Yehud",
            tel: "1719915173",
            _id: "a101"
        },
        {
            fullName: "Michael Spiridonov",
            address: "Lebanon",
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