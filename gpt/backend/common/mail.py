import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# from email.mime.text import MIMEText
# from smtplib import SMTP

def send_verification_email(to_email, verification_link):
    message = Mail(
        from_email='ava@avasproject.com',
        to_emails=to_email,
        subject='Verify your email address',
        html_content=f'Please click the following link to verify your email address: <a href="{verification_link}">{verification_link}</a>'
    )
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(str(e))

# def send_verification_email(to_email, verification_link):
#     subject = "Verify your email address"
#     body = f"""
#     <html>
#     <body>
#         <p>Please click the following link to verify your email address:</p>
#         <p><a href='{verification_link}'>{verification_link}</a></p>
#     </body>
#     </html>
#     """
#     msg = MIMEText(body, 'html')
#     msg['Subject'] = subject
#     msg['From'] = "your-email@example.com"
#     msg['To'] = to_email


#     msg = MIMEText(body, 'html')
#     msg['Subject'] = subject
#     msg['From'] = "your-email@example.com"
#     msg['To'] = to_email

      # MAILTRAP_USERNAME = str(os.getenv("MAILTRAP_USERNAME"))
      # MAILTRAP_PASSWORD = str(os.getenv("MAILTRAP_PASSWORD"))

#     with SMTP("sandbox.smtp.mailtrap.io", 2525) as server:
#         server.starttls()
#         server.login(MAILTRAP_USERNAME, MAILTRAP_PASSWORD)
#         server.sendmail("your-email@example.com", to_email, msg.as_string())
# print("sent")

