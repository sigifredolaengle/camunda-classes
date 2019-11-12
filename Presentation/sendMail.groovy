import javax.mail.Message
import javax.mail.Session
import javax.mail.Transport
import javax.mail.internet.InternetAddress
import javax.mail.internet.MimeMessage

MAILER_HOST = "mail.camunda.com"
MAILER_USER = "demo@mx.camunda.com"
MAILER_PASS = "28484234386345"
MAILER_PORT = 25

MAIL_TO = execution.getVariable("email")

private void runScript() {
        Session session = Session.getDefaultInstance(new Properties())

        MimeMessage message = new MimeMessage(session)
        message.setFrom("demo@camunda.com")
        message.setRecipient(Message.RecipientType.TO, new InternetAddress(MAIL_TO))
        message.setSubject("Your Car insurance application")
        message.setText("Thank you very much for your application.")

        Transport transport = session.getTransport("smtp")
        transport.connect(MAILER_HOST, MAILER_PORT, MAILER_USER, MAILER_PASS)
        transport.sendMessage(message, message.getAllRecipients())
        transport.close()

}

runScript()
