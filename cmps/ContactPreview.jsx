

export function ContactPreview({contact}){
    return <article>
        <h1>{contact.fullName}</h1>
        <h2>{contact.adderss}</h2>
        <h3>{}</h3>
    </article>
}