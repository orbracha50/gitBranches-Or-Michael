
const { useNavigate, useParams,Link } = ReactRouterDOM

export function ContactPreview({contact}){
    const navigate = useNavigate()
    function onEdit(){
        navigate(`contact/${contact.id}`)
    }
    return <article key={contact._id}>
        <h1>Name: {contact.fullName}</h1>
        <h2>Address: {contact.address}</h2>
        <h3>Tel: {contact.tel}</h3>
        <Link className="add-contact-btn" to={`/contact/edit/${contact._id}`} >Edit </Link>
        {/* <button onClick={() => onEdit(contact._id)}>edit</button> */}
    </article>
}