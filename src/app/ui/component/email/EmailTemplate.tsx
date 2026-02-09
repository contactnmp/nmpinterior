import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from '@react-email/components';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string[];
  timeline: string;
}

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  projectType,
  timeline,
}: EmailTemplateProps) => {
  const previewText = `New project inquiry from ${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={h1}>New Project Inquiry</Heading>
            <Text style={text}>
              You have received a new request from the NMP Studio website form.
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Row>
              <Column>
                <Text style={label}>Full Name</Text>
                <Text style={value}>{firstName} {lastName}</Text>
              </Column>
            </Row>
            
            <Row>
              <Column>
                <Text style={label}>Email</Text>
                <Text style={value}>
                  <a href={`mailto:${email}`} style={link}>{email}</a>
                </Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Project Types</Text>
                <Text style={value}>
                  {projectType && projectType.length > 0 ? projectType.join(', ') : 'Not specified'}
                </Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text style={label}>Timeline</Text>
                <Text style={value}>{timeline}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={footer}>
              Sent from NMP Interior Design Website
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const section = {
  padding: '0 48px',
};

const h1 = {
  color: '#021A62',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.1',
  margin: '0 0 15px',
  padding: '0 48px',
};

const text = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  padding: '0 48px',
};

const label = {
  color: '#021A62',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  lineHeight: '16px',
  marginBottom: '4px',
};

const value = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '20px',
};

const link = {
  color: '#021A62',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 48px',
};