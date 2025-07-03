import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr, Row, Column } from "@react-email/components"

interface ContactEmailTemplateProps {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export const ContactEmailTemplate = ({ name, email, phone, subject, message }: ContactEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Новое сообщение от {name} - {subject}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Tut School</Heading>
            <Text style={subtitle}>Новое сообщение с сайта</Text>
          </Section>

          <Section style={content}>
            <Heading style={h2}>Детали сообщения</Heading>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Имя:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{name}</Text>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>

            {phone && (
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Телефон:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>{phone}</Text>
                </Column>
              </Row>
            )}

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Тема:</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{subject}</Text>
              </Column>
            </Row>

            <Hr style={hr} />

            <Section style={messageSection}>
              <Heading style={h3}>Сообщение:</Heading>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Hr style={hr} />

            <Section style={footer}>
              <Text style={footerText}>
                Это сообщение отправлено с контактной формы сайта <strong>tutschool.ru</strong>
              </Text>
              <Text style={footerText}>
                Дата отправки:{" "}
                {new Date().toLocaleString("ru-RU", {
                  timeZone: "Europe/Moscow",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
}

const header = {
  padding: "32px 24px",
  backgroundColor: "#5C162E",
  textAlign: "center" as const,
}

const h1 = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const subtitle = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0",
  opacity: "0.8",
  textAlign: "center" as const,
}

const content = {
  padding: "24px",
}

const h2 = {
  color: "#5C162E",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 24px",
}

const h3 = {
  color: "#5C162E",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 16px",
}

const infoRow = {
  marginBottom: "16px",
}

const labelColumn = {
  width: "120px",
  verticalAlign: "top" as const,
}

const valueColumn = {
  verticalAlign: "top" as const,
}

const label = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
}

const value = {
  color: "#111827",
  fontSize: "14px",
  margin: "0",
}

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
}

const messageSection = {
  margin: "24px 0",
}

const messageText = {
  color: "#111827",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  padding: "16px",
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  whiteSpace: "pre-wrap" as const,
}

const footer = {
  marginTop: "32px",
  paddingTop: "24px",
  borderTop: "1px solid #e5e7eb",
}

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  margin: "0 0 8px",
  textAlign: "center" as const,
}
