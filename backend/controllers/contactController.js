import Contact from "../models/Contact.js";
import asyncHandler from "../utils/asyncHandler.js";
import transporter from "../utils/mail.js";

// ==========================
// Add Contact
// ==========================
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
    subject:
      subject && subject.trim() !== ""
        ? subject.trim()
        : "New Inquiry from Website",
    message: message.trim(),
  };

  // Save Contact
  const newContact = await Contact.create(contactData);

  // ===============================
  // Send Email To Admin
  // ===============================
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,

      subject: `📩 New Contact - ${contactData.subject}`,

      html: `
        <h2>📩 New Contact Form Submission</h2>

        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><b>Name</b></td>
            <td>${contactData.name}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${contactData.email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${contactData.phone}</td>
          </tr>

          <tr>
            <td><b>Subject</b></td>
            <td>${contactData.subject}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${contactData.message}</td>
          </tr>
        </table>

        <br>

        <p>This email was sent automatically from Sanskar Vidya Mandir Website.</p>
      `,
    });

    console.log("✅ Admin Email Sent");
  } catch (err) {
    console.log("❌ Admin Email Error:", err.message);
  }

  // ===============================
  // Auto Reply To User
  // ===============================
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: contactData.email,

      subject: "Thank You for Contacting Sanskar Vidya Mandir",

      html: `
        <h2>Dear ${contactData.name},</h2>

        <p>
        Thank you for contacting <b>Sanskar Vidya Mandir</b>.
        </p>

        <p>
        We have received your message successfully.
        Our team will contact you shortly.
        </p>

        <hr>

        <h3>Your Details</h3>

        <p><b>Name:</b> ${contactData.name}</p>

        <p><b>Email:</b> ${contactData.email}</p>

        <p><b>Phone:</b> ${contactData.phone}</p>

        <p><b>Subject:</b> ${contactData.subject}</p>

        <p><b>Message:</b></p>

        <p>${contactData.message}</p>

        <br>

        <p>
        Regards,<br>
        <b>Sanskar Vidya Mandir</b>
        </p>
      `,
    });

    console.log("✅ User Email Sent");
  } catch (err) {
    console.log("❌ User Email Error:", err.message);
  }

  res.status(201).json({
    success: true,
    message: "Message Sent Successfully!",
    contact: newContact,
  });
});

// ==========================
// Get All Contacts
// ==========================
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

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
});

// ==========================
// Update Contact
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