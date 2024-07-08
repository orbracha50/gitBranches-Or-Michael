const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { contactService } from "../services/contact.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"

export function ContactDetails() {
  const [contact, setContact] = useState(null)
  const { contactId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadContact()
  }, [contactId])

  function loadContact() {
    contactService
      .getById(contactId)
      .then((contact) => setContact(contact))
      .catch((err) => {
        console.log("Had issues in contact details", err)
        showErrorMsg("Cannot load contact")
        navigate("/contact")
      })
  }

  if (!contact) return <div>Loading...</div>
  return (
    <section className="contact-details">
      <h1>Contact Name: {contact.fullname}</h1>
      <h2>Contact Address: {contact.address}</h2>
      <h5>Phone Number: ${contact.tel}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas
        cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat
        perferendis tempora aspernatur sit, explicabo veritatis corrupti
        perspiciatis repellat, enim quibusdam!
      </p>
    </section>
  )
}
