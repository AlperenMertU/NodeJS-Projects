//@desc Get all contacts
//@route Get /api/contact
//@acces public

const getContacts = (req, res) => {
    res.status(200).json({ message: "get all contacts" })
}

//@desc Create new contact
//@route POST /api/contact/:id
//@acces public

const createContact = (req, res) => {
    console.log("the request body is", req.body);
    const { email, phone, name } = req.body
    if (!email || !phone || email) {
        res.status(400)

        throw new Error("All fields are Mandatory")
    }
    res.status(201).json({ message: "get all contacts" })
}

//@desc GET all contacts
//@route GET /api/contact/:id
//@acces public

const getContact = (req, res) => {

    res.status(201).json({ message: `Get contact for ${req.params.id}` })
}


//@desc Update all contacts
//@route POST /api/contact/:id
//@acces public

const updateContact = (req, res) => {
    res.status(201).json({ message: `Update contact for ${req.params.id}` })
}

//@desc Delete contact
//@route delete /api/contact/:id
//@acces public

const deleteContact = (req, res) => {
    res.status(201).json({ message: `Delete contact for ${req.params.id}` })
}



module.exports = { getContacts, getContact, createContact, deleteContact, updateContact }













