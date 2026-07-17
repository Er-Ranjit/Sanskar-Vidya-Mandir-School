import Contact from "../models/Contact.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendEmail } from "../utils/mail.js";

export const addContact = asyncHandler(async (req, res) => {
  console.log("📩 CONTACT FORM:", req.body);

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  const contactData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    subject: subject && subject.trim() !== "" ? subject.trim() : "New Inquiry from Website",
    message: message.trim(),
  };

  const newContact = await Contact.create(contactData);

  // Respond immediately — don't make user wait for email
  res.status(201).json({
    success: true,
    message: "Message Sent Successfully!",
    contact: newContact,
  });

  // Emails happen in background after response is sent
  sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `📩 New Contact - ${contactData.subject}`,
    html: `
      <h2>📩 New Contact Form Submission</h2>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr><td><b>Name</b></td><td>${contactData.name}</td></tr>
        <tr><td><b>Email</b></td><td>${contactData.email}</td></tr>
        <tr><td><b>Phone</b></td><td>${contactData.phone}</td></tr>
        <tr><td><b>Subject</b></td><td>${contactData.subject}</td></tr>
        <tr><td><b>Message</b></td><td>${contactData.message}</td></tr>
      </table>
      <br>
      <p>This email was sent automatically from Sanskar Vidya Mandir Website.</p>
    `,
  })
    .then(() => console.log("✅ Admin Email Sent"))
    .catch((err) => console.log("❌ Admin Email Error:", err.response?.data || err.message));

  sendEmail({
    to: contactData.email,
    subject: "Thank You for Contacting Sanskar Vidya Mandir",
    html: `
      <h2>Dear ${contactData.name},</h2>
      <p>Thank you for contacting <b>Sanskar Vidya Mandir</b>.</p>
      <p>We have received your message successfully. Our team will contact you shortly.</p>
      <hr>
      <h3>Your Details</h3>
      <p><b>Name:</b> ${contactData.name}</p>
      <p><b>Email:</b> ${contactData.email}</p>
      <p><b>Phone:</b> ${contactData.phone}</p>
      <p><b>Subject:</b> ${contactData.subject}</p>
      <p><b>Message:</b></p>
      <p>${contactData.message}</p>
      <br>
      <p>Regards,<br><b>Sanskar Vidya Mandir</b></p>
    `,
  })
    .then(() => console.log("✅ User Email Sent"))
    .catch((err) => console.log("❌ User Email Error:", err.response?.data || err.message));
});

// baaki functions (getContacts, getContactById, updateContact, deleteContact) waise hi rehne dein