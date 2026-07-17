import Contact from "../models/Contact.js";
import transporter from "../config/mail.js";
import asyncHandler from "../utils/asyncHandler.js";

// ==========================
// Add Contact (Mapped properly for routing match)
// ==========================
export const addContact = asyncHandler(async (req, res) => {
  console.log("RECEIVED CONTACT DATA FROM FRONTEND:", req.body);

  const { name, email, phone, subject, message } = req.body;

  // 1. Frontend inputs checking
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields (Name, Email, Phone, Message).",
    });
  }

  // 2. Safe Subject Handling for missing form elements
  const finalSubject = subject && subject.trim() !== "" ? subject.trim() : "New Inquiry from Website Contact Form";

  // 3. Database Entry
  const contact = await Contact.create({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    subject: finalSubject,
    message: message.trim(),
  });

  // 4. Safe email execution thread inside sub-try block to prevent server 500 crash
  try {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

    if (adminEmail && process.env.EMAIL_USER) {
      await transporter.sendMail({
        from: `"Sanskar Vidya Mandir Website" <${process.env.EMAIL_USER}>`,
        to: adminEmail,
        replyTo: email,
        subject: `📩 New Contact Message - ${finalSubject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${finalSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      console.log("Contact notification email processed successfully.");
    }
  } catch (mailError) {
    console.error("NODEMAILER ERROR (Safely bypassed to avoid server crash):", mailError.message);
  }

  // 5. Always send back a 201 response once database is updated
  return res.status(201).json({
    success: true,
    message: "Message Sent Successfully 🎉",
    contact,
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
