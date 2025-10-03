// Test script for email functionality
const nodemailer = require("nodemailer");
require("dotenv").config();

const testEmail = async () => {
  try {
    console.log("Testing email configuration...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing email credentials in .env file");
      console.log("Please create a .env file with:");
      console.log("EMAIL_USER=your-gmail@gmail.com");
      console.log("EMAIL_PASS=your-app-password");
      console.log("PORT=5000");
      return;
    }

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "opensourceworld.fyi@gmail.com",
      subject: "Test Email from Open Source World",
      text: "This is a test email to verify the contact form functionality.",
      html: "<h2>Test Email</h2><p>This is a test email to verify the contact form functionality.</p>",
    };

    console.log("Sending test email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Test email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Recipient:", mailOptions.to);
  } catch (error) {
    console.error("❌ Error sending test email:", error.message);
    if (error.message.includes("Invalid login")) {
      console.log(
        "💡 Make sure you're using an App Password, not your regular Gmail password"
      );
      console.log(
        "💡 Enable 2-Factor Authentication and generate an App Password"
      );
    }
  }
};

testEmail();
