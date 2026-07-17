import Contact from "../models/Contact.js";
import transporter from "../config/mail.js";

// ==========================
// Add Contact
// ==========================
export const addContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 1. Frontend validation check
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields (Name, Email, Phone, Message).",
      });
    }

    // 2. Safe Subject Handling (Frontend fallback)
    const finalSubject = subject && subject.trim() !== "" ? subject.trim() : "New Inquiry from Website Contact Form";

    // 3. Save Contact in MongoDB Safely
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject: finalSubject,
      message,
    });

    // 4. Try sending email safely (Wrap in try-catch to avoid 500 crash if env variables are missing)
    try {
      const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER; // Fallback to EMAIL_USER if ADMIN_EMAIL is missing

      if (adminEmail) {
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
        console.log("Contact Email Sent Successfully");
      }
    } catch (mailError) {
      // If email config fails, log it but DO NOT crash the server
      console.error("NODEMAILER ERROR (Bypassed to prevent 500):", mailError.message);
    }

    // 5. Always respond with 201 success if database entry is done
    return res.status(201).json({
      success: true,
      message: "Message Sent Successfully 🎉",
      contact,
    });

  } catch (error) {
    console.error("CONTACT CONTROLLER MAIN ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error in contact controller",
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
