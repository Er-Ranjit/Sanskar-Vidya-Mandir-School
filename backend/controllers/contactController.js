import Contact from "../models/Contact.js";
import transporter from "../config/mail.js";

// ==========================
// Add Contact
// ==========================
export const addContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // Save Contact in MongoDB
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    await transporter.sendMail({
  from: `"Sanskar Vidya Mandir Website" <${process.env.EMAIL_USER}>`,
  to: process.env.ADMIN_EMAIL,
  replyTo: email,
  subject: `📩 New Contact Message - ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      contact,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Contacts
// ==========================
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: contacts.length,
      contacts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Single Contact
// ==========================
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact Not Found",
      });
    }

    res.status(200).json({
      success: true,
      contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Contact Status
// ==========================
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact Not Found",
      });
    }

    contact.status = req.body.status;

    await contact.save();

    res.status(200).json({
      success: true,
      message: "Status Updated Successfully",
      contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Contact
// ==========================
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact Not Found",
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: "Contact Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};