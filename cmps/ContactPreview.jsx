

export function ContactPreview({contact}){
    return <article>
        <h1>{contact.fullName}</h1>
        <h2>{contact.address}</h2>
        <h3>{contact.tel}</h3>
    </article>
}