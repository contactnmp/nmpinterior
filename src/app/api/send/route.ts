import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailTemplate from '@/app/ui/component/email/EmailTemplate';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, timeline } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailHtml = await render(
      EmailTemplate({ 
        firstName, 
        lastName, 
        email, 
        projectType, 
        timeline 
      })
    );

    const mailOptions = {
      from: `"NMP Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `New Inquiry form: ${firstName} ${lastName}`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}