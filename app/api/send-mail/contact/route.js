import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
export async function POST(request) {
  const res = await request.json();

  const { name, email, message } = res;

  const msg = {
    to: "mahfuzm444@gmail.com", // your designated email address
    from: email,
    subject: `New Contact Form ${name}`,
    text: message,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to send email" });
  }
}
