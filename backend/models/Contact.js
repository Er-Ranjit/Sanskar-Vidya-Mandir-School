import Contact from "../models/Contact.js";
import asyncHandler from "../utils/asyncHandler.js";

// =============================
// Submit Contact Form
// =============================
export const submitContact = asyncHandler(async (req, res) => {
  console.log("RECEIVED CONTACT DATA:", req.body);

  const { name, email, phone, message, subject } = req.body;

  // 1. Frontend validation check
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the fields (Name, Email, Phone, Message).",
    });
  }

  // 2. Data Mapping (Handling missing subject safely)
  const contactData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    message: message.trim(),
    // ✅ Agar frontend se subject nahi aaya, toh automated default text set ho jayega
    subject: subject && subject.trim() !== "" ? subject.trim() : "New Inquiry from Website Contact Form"
  };

  // 3. Save to MongoDB Database safely
  const newContact = await Contact.create(contactData);

  res.status(201).json({
    success: true,
    message: "Message Sent Successfully! 🎉",
    data: newContact,
  });
});

// =============================
// Get All Contacts (For Admin Dashboard)
// =============================
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 }).lean();

  res.status(200).json({
    success: true,
    total: contacts.length,
    contacts,
  });
});
