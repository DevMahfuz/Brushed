"use server";

import { createClient } from "@/utils/supabase/server";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY); // Set your SendGrid API key here

export const SendConfirmationEmail = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const msg = {
    to: user.email,
    from: "hello@brushed.ae", // Set your verified sender email here
    subject: "New Booking on Brushed",
    html: `<p>Your booking has been confirmed Successfully</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.toString());
  }
};

// Example usage
