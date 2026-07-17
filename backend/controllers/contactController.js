import Contact from "../models/Contact.js";
import asyncHandler from "../utils/asyncHandler.js";

// ==========================
// Add Contact (Mapped properly for routing match)
// ==========================
export const addContact = asyncHandler(async (req, res) => {
  console.log("RECEIVED CONTACT DATA FROM FRONTEND:", req.body);

  const { name, email, phone, subject, message } = req.body;

  // 1. Frontend validation check
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields (Name, Email, Phone, Message).",
    });
  }

  // 2. Data Mapping (Handling missing subject safely)
  const contactData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    message: message.trim(),
    // ✅ Automated default text set if frontend misses subject field
    subject: subject && subject.trim() !== "" ? subject.trim() : "New Inquiry from Website Contact Form"
  };

  // 3. Save to MongoDB Database safely
  const newContact = await Contact.create(contactData);

  res.status(201).json({
    success: true,
    message: "Message Sent Successfully! 🎉",
    contact: newContact,
  });
});

// ==========================
// Get All Contacts
// ==========================
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({
    createdAt: -1,
  }).lean();

  res.status(200).json({
    success: true,
    total: contacts.length,
    contacts,
  });
});

// ==========================
// Get Single Contact
// ==========================
export const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id).lean();

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
});

// ==========================
// Update Contact Status
// ==========================
export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: "Contact Not Found",
    });
  }

  contact.status = req.body.status || "Read";
  await contact.save();

  res.status(200).json({
    success: true,
    message: "Status Updated Successfully",
    contact,
  });
});

// ==========================
// Delete Contact
// ==========================
export const deleteContact = asyncHandler(async (req, res) => {
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
});
