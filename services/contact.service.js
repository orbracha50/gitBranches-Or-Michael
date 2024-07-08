
import fs from 'fs'
import { utilService } from './util.service.js'

export const contactService = {
    query,
    getById,
    remove,
    save
}

const contacts = utilService.readJsonFile('data/contact.json')

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
    return _savecontactsToFile()
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
    return _savecontactsToFile().then(() => contact)
}

function _savecontactsToFile() {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(contacts, null, 2)
        fs.writeFile('data/contact.json', data, (err) => {
            if (err) {
                
                return reject(err);
            }
            console.log('The file was saved!');
            resolve()
        });
    })
}
