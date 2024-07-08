const { useState, useEffect, useRef } = React

import { utilService } from "../services/util.service.js"


export function ContactFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    onSetFilter = useRef(utilService.debounce(onSetFilter, 500))

    useEffect(() => {
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return (
        <section className="contact-filter full main-layout">
            <h2>Contacts Filter</h2>
            <form >
                <label htmlFor="fullName">Full Name:</label>
                <input type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="By Full Name"
                    value={filterByToEdit.fullName}
                    onChange={handleChange}
                />

                <label htmlFor="address">Address:</label>
                <input type="text"
                    id="address"
                    name="address"
                    placeholder="By Address"
                    value={filterByToEdit.address || ''}
                    onChange={handleChange}
                />

                <label htmlFor="sort">Sort By:</label>
                <select value={filterByToEdit.sort} name="sort" onChange={handleChange} id="sort">
                <option value="">Sort By</option>
                <option value="fullName">Full Name</option>
                <option value="address">Address</option>
            </select>
            </form>

        </section>
    )
}