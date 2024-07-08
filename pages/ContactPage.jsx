export function contactIndex({ contacts }) {
    return <section>
        {contacts && contacts.map(contact => <ContactPreview  contact={contact}/>)}
    </section>
}