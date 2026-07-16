import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

  destination(req, file, cb) {

    cb(null, "uploads/notices");

  },

  filename(req, file, cb) {

    cb(
      null,
      Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname)
    );

  },

});

const fileFilter = (req, file, cb) => {

  const allowed = /pdf|jpg|jpeg|png|webp/;

  const ext = allowed.test(
    path.extname(file.originalname).toLowerCase()
  );

  const mime =
    file.mimetype === "application/pdf" ||
    file.mimetype.startsWith("image/");

  if (ext && mime) {

    cb(null, true);

  } else {

    cb(new Error("Only PDF or Image Allowed"));

  }

};

const upload = multer({

  storage,

  fileFilter,

  limits: {
    fileSize: 10 * 1024 * 1024,
  },

});

export default upload;