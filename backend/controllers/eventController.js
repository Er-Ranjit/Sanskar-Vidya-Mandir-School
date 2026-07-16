import Event from "../models/Event.js";
import fs from "fs";
import path from "path";

// ==========================
// Add Event
// ==========================
export const addEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      eventDate,
      eventTime,
      location,
      organizer,
      category,
      status,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please Upload Event Image",
      });
    }

    const event = await Event.create({
      title,
      description,
      image: `/uploads/events/${req.file.filename}`,
      eventDate,
      eventTime,
      location,
      organizer,
      category,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Event Added Successfully",
      event,
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
// Get All Events
// ==========================
export const getEvents = async (req, res) => {
  try {

    const events = await Event.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: events.length,
      events,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Get Single Event
// ==========================
export const getEventById = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event Not Found",
      });
    }

    res.status(200).json({
      success: true,
      event,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Update Event
// ==========================
export const updateEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event Not Found",
      });
    }

    if (req.file) {

      const oldImage = path.join(
        process.cwd(),
        event.image.replace("/", "")
      );

      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }

      event.image = `/uploads/events/${req.file.filename}`;
    }

    event.title = req.body.title;
    event.description = req.body.description;
    event.eventDate = req.body.eventDate;
    event.eventTime = req.body.eventTime;
    event.location = req.body.location;
    event.organizer = req.body.organizer;
    event.category = req.body.category;
    event.status = req.body.status;

    await event.save();

    res.status(200).json({
      success: true,
      message: "Event Updated Successfully",
      event,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Delete Event
// ==========================
export const deleteEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event Not Found",
      });
    }

    const imagePath = path.join(
      process.cwd(),
      event.image.replace("/", "")
    );

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};