

export function ContactPreview({contact}){
    return <article key={contact._id}>
        <h1>Name: {contact.fullName}</h1>
        <h2>Address: {contact.address}</h2>
        <h3>Tel: {contact.tel}</h3>
    </article>
}