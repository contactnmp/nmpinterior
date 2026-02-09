import EmailTemplate from '@/app/ui/component/email/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, timeline } = body;

    const data = await resend.emails.send({
      from: 'NMP Website <onboarding@resend.dev>',
      to: ['savenkokirill891@gmail.com'],
      subject: `New Inquiry from ${firstName} ${lastName}`,
      react: EmailTemplate({ 
        firstName, 
        lastName, 
        email, 
        projectType, 
        timeline 
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}