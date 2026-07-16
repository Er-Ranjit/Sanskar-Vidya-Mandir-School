import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting via Backup Route...");

    // यहाँ हम डायरेक्ट बिना किसी एक्स्ट्रा कॉन्फ़िगरेशन के कनेक्ट करेंगे
    // लेकिन कुछ एक्स्ट्रा फ़ायरवॉल सेटिंग्स के साथ
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // टाइमआउट बढ़ाकर 10 सेकंड कर दिया
      maxPoolSize: 10,
      socketTimeoutMS: 45000,
      family: 4 // IPv4 को फ़ोर्स करने के लिए
    });

    console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
